import {
  AlertCircle,
  AlertTriangle,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Bell,
  // Misc
  Calendar,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CirclePlus,
  // Fallback
  CircleQuestionMark,
  Clock,
  CommandIcon,
  Download,
  // Files
  File,
  FileText,
  Folder,
  Heart,
  // Navigation
  Home,
  // Status
  Info,
  Laptop,
  Loader2,
  LogOut,
  Maximize,
  Menu,
  Minus,
  MoreHorizontal,
  MoreVertical,
  Pause,
  Pencil,
  // Media
  Play,
  Plus,
  RefreshCw,
  // Actions
  Search,
  Settings,
  Square,
  Star,
  Trash2,
  Upload,
  // User
  User,
  Users,
  Volume2,
  X,
} from 'lucide-react';

import { CustomCircleIcon } from './custom-icons/circle';
import type { TIcon, TIconName } from './icon.types';

export const IconMap: Record<TIconName, TIcon> = {
  // ===== Navigation =====
  home: Home,
  menu: Menu,
  moreHorizontal: MoreHorizontal,
  moreVertical: MoreVertical,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,

  // ===== Actions =====
  search: Search,
  close: X,
  plus: Plus,
  circlePlus: CirclePlus,
  minus: Minus,
  check: Check,
  edit: Pencil,
  trash: Trash2,
  download: Download,
  upload: Upload,
  refresh: RefreshCw,
  command: CommandIcon,
  maximize: Maximize,

  // ===== Status =====
  info: Info,
  warning: AlertTriangle,
  error: AlertCircle,
  success: CheckCircle,
  loader: Loader2,

  // ===== Media =====
  play: Play,
  pause: Pause,
  stop: Square,
  volume: Volume2,

  // ===== User =====
  user: User,
  users: Users,
  settings: Settings,
  logOut: LogOut,

  // ===== Files =====
  file: File,
  folder: Folder,
  fileText: FileText,

  // ===== Misc =====
  calendar: Calendar,
  clock: Clock,
  bell: Bell,
  star: Star,
  heart: Heart,
  laptop: Laptop,

  // ===== Custom =====
  circle: CustomCircleIcon,

  // ===== Fallback =====
  default: CircleQuestionMark,
};
