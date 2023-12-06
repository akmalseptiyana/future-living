import { Dispatch, SetStateAction } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/atoms/button";

interface MenuToggleProps {
  isMenuActive: boolean;
  setMenuActive: Dispatch<SetStateAction<boolean>>;
}

export function MenuToggle({ isMenuActive, setMenuActive }: MenuToggleProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      type="button"
      className="md:hidden"
      aria-label="toggle navigation"
      onClick={() => setMenuActive(!isMenuActive)}
    >
      {isMenuActive ? <X size={24} /> : <Menu size={24} />}
    </Button>
  );
}
