import {
  PawPrint,
  Squirrel,
  Moon,
  Bird,
  Mouse,
  Hammer,
  Siren,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  PawPrint,
  Squirrel,
  Moon,
  Bird,
  Mouse,
  Hammer,
  Siren,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? PawPrint;
  return <Icon className={className} />;
}
