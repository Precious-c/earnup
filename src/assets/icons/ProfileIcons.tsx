import type { LucideIcon } from "lucide-react"
import { BadgeCheck, ShieldEllipsis, Flag, Star, Languages, FileText, MessageCircle, ChevronRight, ExternalLink } from "lucide-react"

export interface MenuItem {
  id: string
  icon: LucideIcon
  label: string
  endIcon?: LucideIcon
  href: string
  external?: boolean
}

export const menuItems: MenuItem[] = [
  {
    id: "verification",
    icon: BadgeCheck,
    label: "Verification",
    endIcon: ChevronRight,
    href: "/profile/verification",
  },
  {
    id: "2fa",
    icon: ShieldEllipsis,
    label: "2FA",
    endIcon: ChevronRight,
    href: "/profile/2fa",
  },
  {
    id: "payment",
    icon: Star,
    label: "Saved payment details",
    endIcon: ChevronRight,
    href: "/profile/payment",
  },
  {
    id: "language",
    icon: Flag,
    label: "Language",
    endIcon: ChevronRight,
    href: "/profile/language",
  },
  {
    id: "documents",
    icon: FileText,
    label: "Documents",
    endIcon: ChevronRight,
    href: "/profile/documents",
  },
  {
    id: "support",
    icon: MessageCircle,
    label: "Support",
    endIcon: ExternalLink,
    href: "https://support.kolo.com",
    external: true,
  },
]

