# -*- sh -*-
# shfmt: i2

man_command_parse() {
  local arg=
  local optarg=0
  optind=0

  for arg; do
    shift
    : $((optind++))
    if [[ "${optarg}" -gt 0 ]]; then
      opts+=("$arg")
      : $((optarg--))
    elif [[ "${arg}" =~ ^([[:digit:]]+[a-z]*)$ ]]; then
      section="$arg"
    elif [[ "${arg}" =~ ^(.*)\.([[:digit:]]+[a-z]*)$ ]]; then
      shim_name="${BASH_REMATCH[1]}"
      section="${BASH_REMATCH[2]}"
    elif [[ "${arg}" =~ ^(.*)\(([[:digit:]]+.*)\)$ ]]; then
      shim_name="${BASH_REMATCH[1]}"
      section="${BASH_REMATCH[2]}"
    elif [[ "${arg}" =~ ^-(C|-warnings|R|-recode|L|-locale|m|-system|M|-manpath|S|s|-sections|e|-extensions|P|-pager|r|-prompt|E|-encoding|p|-preprocessor)$ ]]; then
      opts+=("${arg}")
      optarg=1
    elif [[ "${arg:0:1}" == '-' ]]; then
      opts+=("${arg}")
    else
      if [ -n "${shim_name}" ]; then
        args+=("${arg}")
      else
        shim_name="$arg"
        break
      fi
    fi
  done
}

man_command_parse_alt() {
  local arg=
  for arg in "${args[@]:-$shim_name}"; do
    local man=
    if [[ "${optarg}" -gt 0 ]]; then
      man="${arg}"
      : $((optarg--))
    elif [[ "${arg}" =~ ^()([[:digit:]]+[a-z]*)$ ]]; then
      section="${BASH_REMATCH[2]}"
      optarg=1
      continue
    elif [[ "${arg}" =~ ^(.*)\(([[:digit:]]+.*)\)$ ]]; then
      man="${BASH_REMATCH[1]}"
      section="${BASH_REMATCH[2]}"
    elif [[ "${arg}" =~ ^(.*)\.([[:digit:]]+[a-z]*)$ ]]; then
      man="${BASH_REMATCH[1]}"
      section="${BASH_REMATCH[2]}"
    else
      man="${arg}"
    fi
    manpages+=("${man}${section:+ in section ${section}}")
    readarray -O "${#manfiles[*]}" -t manfiles < <(find "${plugin_dir}" -type f -iregex ".*/${man}\.${section:-[0-9]+[a-z]*}")
  done
}

man_command() {
  local shim_name=
  local optind=0
  local section=
  local -a opts=()
  local -a args=()

  man_command_parse "$@"
  shift $((optind))

  local -a args+=("$@")

  if [ -z "$shim_name" ]; then
    printf "usage: asdf man <man options> <plugin_name> <command>\\n"
    printf "   Note: If the command name does not match the plugin name, use the command name.\\n"
    exit 1
  fi

  handle_man_command() {
    local plugin_dir=
    local plugin_name="$1"
    local version="$2"
    local -a mandirs=()
    local -a manfiles=()
    local -a manpages=()

    plugin_dir="$(asdf_data_dir)/installs/${plugin_name}/${version}"
    readarray -t mandirs < <(find "${plugin_dir}" -type d -name man -print)

    if [ "${#mandirs[*]}" -gt 0 ]; then
      MANPATH="$(
        IFS=':'
        echo "${mandirs[*]}"
      )" man "${opts[@]}" ${section:+"${section}"} "${args[@]:-$shim_name}"
    else
      # Alternative approach, try and manually track down manual files not in a
      # standard man/man.X/cmd.X hierarchy.
      man_command_parse_alt "${args[@]:-$shim_name}"
      if (("${#manfiles[@]}")); then
        man "${opts[@]}" "${manfiles[@]}"
      else
        printf "No manual entry for %s\n" "${manpages[@]}"
      fi
    fi
  }

  with_shim_executable "$shim_name" handle_man_command || exit 1
}

man_command "$@"
