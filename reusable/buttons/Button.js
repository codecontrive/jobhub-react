import {
  BUTTON_TYPE_FULL,
  BUTTON_TYPE_OUTLINE
} from "../../constants/buttons/ButtonTypes";
import {
  BUTTON_SCHEMA_DEFAULT,
  BUTTON_SCHEMA_DANGER,
  BUTTON_SCHEMA_INFO
} from "../../constants/buttons/ButtonColorSchemas";

export const Button = ({
  title = "Button",
  type = BUTTON_TYPE_FULL,
  schema = BUTTON_SCHEMA_DEFAULT
}) => {
  return (
    <button style={{ ...getTypeStyle(type), ...getSchemaStyle(schema) }}>
      {title}
    </button>
  );
};

const getTypeStyle = buttonStyle => {
  switch (buttonStyle) {
    case BUTTON_TYPE_FULL:
      return {
        padding: 10,
        fontSize: 16,
        border: "1px solid black"
      };
    case BUTTON_TYPE_OUTLINE:
      return {
        padding: 10,
        fontSize: 16,
        background: "none",
        border: "1px solid black"
      };
    default:
      return {};
  }
};

const getSchemaStyle = buttonSchema => {
  switch (buttonSchema) {
    case BUTTON_SCHEMA_DANGER:
      return { border: "1px solid red", color: "red" };
    case BUTTON_SCHEMA_INFO:
      return { border: "1px solid #3498db", color: "#3498db" };
    case BUTTON_SCHEMA_DEFAULT:
      return { border: "1px solid black", color: "black" };
  }
};
