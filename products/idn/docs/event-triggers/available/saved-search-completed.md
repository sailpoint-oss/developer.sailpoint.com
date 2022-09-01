---
id: saved-search-completed
slug: /docs/event-triggers/saved-search-completed
---

# Saved Search Completed

## Event context

![Flow](./img/saved-search-path.png)

Users can to subscribe to Saved Searches and receive an email of a report generated from the saved search. For example, a user can save a search query called "Identities with upcoming end dates" and create a subscription to receive a daily report showing identities with an end date within 10 days from the current date. This event trigger can also notify an external HTTP application that a report generated from a saved search subscription is available to be processed.

Saved Search Completed events occur based on the schedules set for saved search subscriptions. For example, if you have a scheduled saved search for Monday, Tuesday, Wednesday, Thursday, Friday at 6:00 GMT, this is when your HTTP endpoint will also receive a notification. This can be set using the `schedule` object in the [create scheduled search endpoint](https://developer.sailpoint.com/apis/v3/#operation/scheduledSearchCreate).

To receive this event when a saved search query does not have any results, set `emailEmptyResults` to `TRUE`.  You can also set the expiration date in the `expiration` field within the `schedule` object. Your HTTP endpoint will stop receiving these events when the Scheduled Search expires.

Some examples of how this trigger can be used include:

- Perform Quality Control, such as continuously checking for Separation of Duties (SOD) violations
- Respond to upcoming Joiner-Mover-Leaver scenarios, such as deprovisioning access before an employee's separation date.

## Additional information and links

- **Trigger Type**: [FIRE_AND_FORGET](../event-triggers-trigger-types.md#fire-and-forget)
- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Saved-Search-Complete-Event-Trigger-Input)
