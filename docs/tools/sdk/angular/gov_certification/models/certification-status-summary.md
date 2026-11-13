# CertificationStatusSummary

# CertificationStatusSummary

Import this model from the entry point of its package:

```typescript
import { CertificationStatusSummary } from '@sailpoint/angular-sdk/gov_certification';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activeCertifications** | **(optional)** `number` | The number of active certifications | [default to undefined]
**overdueCertifications** | **(optional)** `number` | The number of certifications passed the due date | [default to undefined]
**maximumDaysOverdue** | **(optional)** `number` | The maximum number of days past due the most overdue certification is | [default to undefined]
**minimumDaysLeftToComplete** | **(optional)** `number` | The closest number of days to completion | [default to undefined]
**completedDecisionsForActiveCerts** | **(optional)** `number` | The number of of decisions that have been made | [default to undefined]
**pendingDecisionsForActiveCerts** | **(optional)** `number` | The number of decisions that are pending | [default to undefined]

