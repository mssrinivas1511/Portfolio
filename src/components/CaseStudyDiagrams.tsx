import { ArrowDown, ArrowRight, CornerLeftUp } from 'lucide-react';
import { Fragment, type ReactNode } from 'react';

interface DiagramStep {
  label: string;
  detail?: string;
  removed?: boolean;
}

const Node = ({ label, detail, removed }: DiagramStep) => (
  <div className={`flex min-h-20 min-w-0 flex-1 flex-col items-center justify-center rounded-xl border bg-card px-3 py-4 text-center shadow-sm ${removed ? 'border-dashed border-primary' : 'border-border'}`}>
    {removed && <span className="mb-2 text-xs font-semibold uppercase text-primary">Removed step</span>}
    <span className={`text-sm font-semibold leading-5 text-card-foreground ${removed ? 'line-through decoration-primary' : ''}`}>{label}</span>
    {detail && <span className="mt-2 text-xs leading-5 text-muted-foreground">{detail}</span>}
  </div>
);

const Connector = ({ horizontal = false, label }: { horizontal?: boolean; label?: string }) => (
  <div aria-hidden="true" className={`flex shrink-0 items-center justify-center gap-1 py-2 text-primary ${horizontal ? 'lg:flex-col lg:px-1 lg:py-0' : 'flex-col'}`}>
    {label && <span className="text-xs font-semibold">{label}</span>}
    <ArrowDown className={`h-5 w-5 ${horizontal ? 'lg:hidden' : ''}`} />
    {horizontal && <ArrowRight className="hidden h-5 w-5 lg:block" />}
  </div>
);

const Steps = ({ steps, horizontal = false }: { steps: DiagramStep[]; horizontal?: boolean }) => (
  <ol className={`flex min-w-0 flex-col ${horizontal ? 'lg:flex-row lg:items-stretch' : ''}`}>
    {steps.map((step, index) => (
      <Fragment key={step.label}>
        {index > 0 && <li className="flex shrink-0 items-center justify-center"><Connector horizontal={horizontal} /></li>}
        <li className="flex min-w-0 flex-1"><Node {...step} /></li>
      </Fragment>
    ))}
  </ol>
);

const Diagram = ({ name, caption, children }: { name: string; caption: string; children: ReactNode }) => (
  <figure aria-label={name} className="mt-6 min-w-0">
    <div className="rounded-xl bg-muted/30 p-4 sm:p-6">{children}</div>
    <figcaption className="mt-3 text-sm text-muted-foreground">{caption}</figcaption>
  </figure>
);

export const ConversationalArchitecture = () => (
  <Diagram name="Conversational architecture diagram" caption="A customer message becomes a validated business action before a confirmation returns to WhatsApp.">
    <Steps horizontal steps={[
      { label: 'Customer' },
      { label: 'WhatsApp chat' },
      { label: 'NLP', detail: 'Intent detection, context & entities' },
      { label: 'Conversation flow' },
      { label: 'Rekart business logic', detail: 'Orders, Subscriptions, Wallet / Payments' },
      { label: 'Confirmation' },
      { label: 'WhatsApp response' },
    ]} />
  </Diagram>
);

export const FailureHandlingLoop = () => (
  <Diagram name="Failure handling loop diagram" caption="Understood intents proceed to success; fallback conversations reveal gaps that feed back into the flow.">
    <div className="mx-auto max-w-3xl">
      <div className="mx-auto max-w-xs"><Node label="Message" /><Connector /><Node label="Intent understood?" /></div>
      <div className="grid gap-6 md:grid-cols-2">
        <div><Connector label="Yes" /><Steps steps={[{ label: 'Process' }, { label: 'Success' }]} /></div>
        <div>
          <Connector label="No" />
          <Steps steps={[{ label: 'Fallback' }, { label: 'Analyse conversation' }, { label: 'Identify gap' }, { label: 'Improve flow' }]} />
          <div className="mt-3 flex items-center gap-2 rounded-bl-xl border-b-2 border-l-2 border-primary px-4 py-3 text-sm font-medium text-primary">
            <CornerLeftUp aria-hidden="true" className="h-5 w-5 shrink-0" />
            <span>Loop back to intent understanding</span>
          </div>
        </div>
      </div>
    </div>
  </Diagram>
);

export const BeforeAfterJourney = () => (
  <Diagram name="Before versus after ordering diagram" caption="The explicit territory-selection step is removed; the delivery address now determines the catalogue behind the scenes.">
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <p className="eyebrow mb-4">Before</p>
        <Steps steps={[{ label: 'Login' }, { label: 'Sales Territory / Map Zone', removed: true }, { label: 'Homepage' }, { label: 'Browse' }, { label: 'Order' }]} />
      </div>
      <div>
        <p className="eyebrow mb-4">After</p>
        <Steps steps={[{ label: 'Login' }, { label: 'Homepage' }, { label: 'Select delivery address' }, { label: 'Address sets territory' }, { label: 'Personalised catalogue' }, { label: 'Order' }]} />
      </div>
    </div>
  </Diagram>
);

const Branches = ({ steps }: { steps: DiagramStep[] }) => (
  <div className="grid gap-4 md:grid-cols-3">
    {steps.map((step) => <div key={step.label}><Connector /><Node {...step} /></div>)}
  </div>
);

export const CustomerJourney = () => (
  <Diagram name="Customer journey diagram" caption="From the homepage, address, catalogue and wallet access connect ordering to delivery visibility and transaction history.">
    <div className="mx-auto max-w-3xl">
      <Node label="Homepage" />
      <Branches steps={[{ label: 'Address' }, { label: 'Products' }, { label: 'Wallet' }]} />
      <Connector />
      <Steps steps={[{ label: 'Personalised catalogue' }, { label: 'Ordering' }]} />
      <Branches steps={[{ label: 'One-time order' }, { label: 'Subscription management' }, { label: 'Payment' }]} />
      <Connector />
      <Steps steps={[{ label: 'Upcoming Deliveries' }, { label: 'History / Transactions' }]} />
    </div>
  </Diagram>
);