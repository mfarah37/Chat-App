import { useState } from "react";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(null);
  const resetTheme = () => {
    setTheme(null);
  };
  const themeClass = theme ? theme.toLowerCase() : "secondary";

  return (
    <div className="mb-2">
      <Dropdown as={ButtonGroup} size="lg">
        <Button
          className="text-capitalize"
          variant={theme ? theme : "secondary"}
        >
          {theme ? theme : "Default"}
        </Button>
        <Dropdown.Toggle
          split
          variant={theme ? theme : "secondary"}
          id="dropdown-split-basic"
        />
        <Dropdown.Menu>
          <Dropdown.Item eventKey="1" onClick={() => setTheme("primary")}>
            Primary
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" onClick={() => setTheme("danger")}>
            Danger
          </Dropdown.Item>
          <Dropdown.Item eventKey="3" onClick={() => setTheme("success")}>
            Success
          </Dropdown.Item>
          <Dropdown.Item eventKey="3" onClick={() => setTheme("info")}>
            Info
          </Dropdown.Item>
          <Dropdown.Item eventKey="3" onClick={() => setTheme("light")}>
            Light
          </Dropdown.Item>
          <Dropdown.Item eventKey="3" onClick={() => setTheme("dark")}>
            Dark
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4" onClick={resetTheme}>
            Default Theme
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
