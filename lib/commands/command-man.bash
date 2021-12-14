# -*- sh -*-

man_command() {
    local shim_name
    shim_name="$1"
	shift

	local -a args=( "$@" )

    if [ -z "$shim_name" ]; then
        printf "usage: asdf man <command>\\n"
        exit 1
    fi

    handle_man_command() {
        local plugin_dir=
        local plugin_name="$1"
        local version="$2"
		local -a mandirs=()

        plugin_dir="$(asdf_data_dir)/installs/${plugin_name}/${version}"
		readarray -t mandirs < <(find "${plugin_dir}" -type d -name man -print)

		[ "${#mandirs[*]}" -gt 0 ] || exit 1

		MANPATH="$(IFS=':'; echo "${mandirs[*]}")" man "${args[@]:-$shim_name}"
    }

    with_shim_executable "$shim_name" handle_man_command || exit 1
}

man_command "$@"
