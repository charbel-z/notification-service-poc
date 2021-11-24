import { Container } from "inversify";
import { Counter } from "./guess/Counter";
import { EvenCounter } from "./guess/EvenCounter";
import { IDENTIFIERS } from "./inversify.identifiers";
import { InversifyApplication } from "./InversifyApplication";
import { SecretMaker } from "./secret/SecretMaker";
import { EvenSecretMaker } from "./secret/EvenSecretMaker";

const INVERSIFY_CONTAINER = new Container();

// Application Singleton Object //
INVERSIFY_CONTAINER.bind<InversifyApplication>(IDENTIFIERS.INVERSIFY_APP_ID).to(
  InversifyApplication
);

INVERSIFY_CONTAINER.bind<Counter>(IDENTIFIERS.EVEN_COUNTER_ID).toConstantValue(
  new EvenCounter(2)
);

INVERSIFY_CONTAINER.bind<SecretMaker>(
  IDENTIFIERS.EVEN_SECRET_MAKER_ID
).toConstantValue(new EvenSecretMaker(2, 300));

export { INVERSIFY_CONTAINER };
