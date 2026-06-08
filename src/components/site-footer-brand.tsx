"use client"

import { motion, useMotionValue, useSpring } from "motion/react"

const VIEWBOX_WIDTH = 1410
const DEFAULT_GRADIENT_X = 705

export function SiteFooterInteractiveLogotype() {
  const gradientX1Raw = useMotionValue(DEFAULT_GRADIENT_X)
  const gradientX1 = useSpring(gradientX1Raw, {
    stiffness: 200,
    damping: 30,
    mass: 0.5,
  })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = event.currentTarget
    const containerRect = container.getBoundingClientRect()
    const mouseX = event.clientX - containerRect.left
    const containerWidth = containerRect.width

    const normalizedX = (mouseX / containerWidth) * VIEWBOX_WIDTH
    const clampedX = Math.max(0, Math.min(VIEWBOX_WIDTH, normalizedX))

    gradientX1Raw.set(clampedX)
  }

  const handleMouseLeave = () => {
    gradientX1Raw.set(DEFAULT_GRADIENT_X)
  }

  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/10">
      <div
        className="overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-full translate-y-[37.5%] items-center justify-center">
          <svg
            className="container size-full"
            viewBox="0 0 842 205"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="32.5"
              y="0.5"
              width="95.7442"
              height="38.2917"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="196.5"
              y="165.5"
              width="75"
              height="38"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="177.5"
              y="4.5"
              width="36"
              height="166"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="304.5"
              y="4.5"
              width="36"
              height="199"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="403.5"
              y="4.5"
              width="36"
              height="199"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="453.5"
              y="41.5"
              width="36"
              height="161"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="487.5"
              y="4.5"
              width="85"
              height="38"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="490.5"
              y="83.5"
              width="45"
              height="38"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="586.5"
              y="40.5"
              width="36"
              height="161"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="763.5"
              y="40.5"
              width="36"
              height="164"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="620.5"
              y="3.5"
              width="85"
              height="38"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="720.5"
              y="2.5"
              width="121"
              height="38"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="623.5"
              y="82.5"
              width="45"
              height="38"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="490.5"
              y="164.5"
              width="80"
              height="38"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="623.5"
              y="163.5"
              width="80"
              height="38"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="354.5"
              y="67.5"
              width="35"
              height="59"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="387.5"
              y="37.5"
              width="35"
              height="46"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="323.5"
              y="37.5"
              width="35"
              height="46"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="256.5"
              y="4.5"
              width="36"
              height="166"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="127.756"
              y="32.1045"
              width="31.7442"
              height="34.875"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="0.5"
              y="141.438"
              width="32.4884"
              height="34.0208"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="0.5"
              y="38.9375"
              width="32.4884"
              height="48.5417"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="128.5"
              y="115.812"
              width="31"
              height="50.25"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="32.5"
              y="85.0625"
              width="95.7442"
              height="38.2917"
              fill="#202022"
              stroke="#09090B"
            />
            <rect
              x="32.5"
              y="166.208"
              width="95.7442"
              height="38.2917"
              fill="#202022"
              stroke="#09090B"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
