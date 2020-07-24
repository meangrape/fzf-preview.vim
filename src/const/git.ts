export const GIT_ACTIONS = ["status", "branch", "log"] as const
export const GIT_BRANCH_ACTIONS = ["checkout", "diff", "yank"] as const

export const GIT_BRANCH_COMMAND =
  "git for-each-ref refs/heads refs/remotes --color=always --format='%(color:green)[branch]%(color:reset)    %(color:reset)%(HEAD) %(color:magenta)%(refname:short)%(color:reset)    %(color:yellow)%(authordate:short)%(color:reset)    %(color:blue)[%(authorname)]%(color:reset)%09' 2> /dev/null"

export const GIT_BRANCH_PREVIEW_COMMAND =
  "[[ '{3}' != '*' ]] && git log {3} --decorate --pretty='format:%C(yellow)%h %C(green)%cd %C(reset)%s %C(red)%d %C(cyan)[%an]' --date=iso --graph --color=always || git log {4} --decorate --pretty='format:%C(yellow)%h %C(green)%cd %C(reset)%s %C(red)%d %C(cyan)[%an]' --date=iso --graph --color=always"
