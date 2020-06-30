function! fzf_preview#remote#resource#bookmarks#get() abort
  return filter(map(bm#location_list(), {
 \ _, b -> s:bookmarks_format_line(b)
 \ }), {
 \ _, b -> b !=# ''
 \ })
endfunction

function! s:bookmarks_format_line(line) abort
  let line = split(a:line, ':')
  let filename = fnamemodify(line[0], ':.')
  if !filereadable(filename)
    return ''
  endif

  let line_number = line[1]
  let text = line[2]

  if text ==# 'Annotation'
    let comment = line[3]
  else
    let text = join(line[2:], ':')
  endif

  if text !=# 'Annotation'
    return filename . ':' . line_number . ':' . text
  else
    return filename . ':' . line_number . ':' . text . ':' . comment
  endif
endfunction
