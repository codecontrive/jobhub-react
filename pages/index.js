import { Layout } from "../reusable/layout/Layout";

import { Button } from "../reusable/buttons/Button";
import { BUTTON_TYPE_OUTLINE } from "../constants/buttons/ButtonTypes";
import { BUTTON_SCHEMA_DANGER } from "../constants/buttons/ButtonColorSchemas";

const Main = () => (
  <Layout>
    <Button
      title="Delete user account"
      type={BUTTON_TYPE_OUTLINE}
      schema={BUTTON_SCHEMA_DANGER}
    ></Button>
  </Layout>
);

export default Main;
