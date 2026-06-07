export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 456 240"
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        d="M43 0h130v46H43ZM171 37h44v42h-44ZM0 45h45v58H0ZM43 99h130v46H43ZM172 135h43v60h-43ZM0 165h45v41H0ZM43 194h130v46H43ZM284 0h130v46H284ZM412 37h44v42h-44ZM241 45h45v58h-45ZM284 99h130v46H284ZM413 135h43v60h-43ZM241 165h45v41h-45ZM284 194h130v46H284Z"
      />
    </svg>
  )
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 456 240"><path fill="${color}" d="M43 0h130v46H43ZM171 37h44v42h-44ZM0 45h45v58H0ZM43 99h130v46H43ZM172 135h43v60h-43ZM0 165h45v41H0ZM43 194h130v46H43ZM284 0h130v46H284ZM412 37h44v42h-44ZM241 45h45v58h-45ZM284 99h130v46H284ZM413 135h43v60h-43ZM241 165h45v41h-45ZM284 194h130v46H284Z"/></svg>`
}
