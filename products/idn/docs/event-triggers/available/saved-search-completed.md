---
id: saved-search-completed
---

# Saved Search Completed

## Event context

![Flow](./img/saved-search-path.png)

Users can to subscribe to Saved Searches and receive an email of a report generated from the saved search. For example, a user can save a search query called "Identities with upcoming end dates" and create a subscription to receive a daily report showing identities with an end date within 10 days from the current date. This event trigger can also notify an external HTTP application that a report generated from a saved search subscription is available to be processed.

Saved Search Completed events occur based on the schedules set for saved search subscriptions. For example, if you have a scheduled saved search for Monday, Tuesday, Wednesday, Thursday, Friday at 6:00 GMT, this is when your HTTP endpoint will also receive a notification. This can be set using the `schedule` object in the [create scheduled search endpoint](/idn/api/v3/scheduled-search-create).

To receive this event when a saved search query does not have any results, set `emailEmptyResults` to `TRUE`.  You can also set the expiration date in the `expiration` field within the `schedule` object. Your HTTP endpoint will stop receiving these events when the Scheduled Search expires.

Some examples of how this trigger can be used include:

- Perform Quality Control, such as continuously checking for Separation of Duties (SOD) violations
- Respond to upcoming Joiner-Mover-Leaver scenarios, such as deprovisioning access before an employee's separation date.

An example input from this trigger is as follows:

```json
{
  "fileName": "Modified.zip",
  "ownerEmail": "test@sailpoint.com",
  "ownerName": "Cloud Support",
  "query": "modified:[now-7y/d TO now]",
  "searchName": "Modified Activity",
  "searchResults": {
    "Account": {
      "count": 3,
      "noun": "accounts",
      "preview": [
        []
      ]
    },
    "Entitlement": {
      "count": 2,
      "noun": "entitlements",
      "preview": [
        []
      ]
    },
    "Identity": {
      "count": 2,
      "noun": "identities",
      "preview": [
        []
      ]
    }
  },
  "signedS3Url": "https://sptcbu-org-data-useast1.s3.amazonaws.com/arsenal-john/reports/Events%20Export.2020-05-06%2018%2759%20GMT.3e580592-86e4-4953-8aea-49e6ef20a086.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200506T185919Z&X-Amz-SignedHeaders=host&X-Amz-Expires=899&X-Amz-Credential=AKIAV5E54XOGTS4Q4L7A%2F20200506%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2e732bb97a12a1fd8a215613e3c31fcdae8ba1fb6a25916843ab5b51d2ddefbc"
}
```

## Additional information and links

- **Trigger Type**: [FIRE_AND_FORGET](../trigger-types.md#fire-and-forget)
 <!-- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Saved-Search-Complete-Event-Trigger-Input) -->
