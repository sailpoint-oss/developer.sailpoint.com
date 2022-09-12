---
id: va-cluster-status-change
---

# VA Cluster Status Change

## Event context

VA Cluster Status Change Events occur when a health check is run on a VA cluster and the health status is different from the previous health check.  This trigger can be used by customers for monitoring all the health status changes of their Virtual Appliance (VA) cluster

Some examples of what you can do with this trigger:

- Create real-time health dashboards for VA Clusters
- Notify an administrator or system to take the appropriate actions when a health status changes

Additional notes about VA Cluster Status Changes:

- VA cluster health checks run every 30 minutes.
- This trigger will invoke on any VA cluster health status change (i.e. healthy -> unhealthy, unhealthy -> healthy)
- More information on [troubleshooting virtual appliances](https://community.sailpoint.com/t5/IdentityNow-Connectors/Virtual-Appliance-Troubleshooting-Guide/ta-p/78735)

Healthy Cluster Source

![VA cluster source healthy](./img/va-cluster-healthy-source.png)

Unhealthy Cluster Source

![VA cluster source unhealthy](./img/va-cluster-unhealthy-source.png)

Warning - Unhealthy Cluster

![Warning unhealthy cluster](./img/va-cluster-warning.png)

Failed - Unhealthy Cluster

![Failed unhealthy cluster](./img/va-cluster-failed.png)

An example input from this trigger is as follows:

```json
{
  "created": "2020-06-29T22:01:50.474Z",
  "type": "CLUSTER",
  "application": {
    "id": "2c9180866166b5b0016167c32ef31a66",
    "name": "Production VA Cluster",
    "attributes": null
  },
  "healthCheckResult": {
    "message": "Test Connection failed with exception. Error message - java.lang Exception",
    "resultType": "SOURCE_STATE_ERROR_CLUSTER",
    "status": "Succeeded"
  },
  "previousHealthCheckResult": {
    "message": "Test Connection failed with exception. Error message - java.lang Exception",
    "resultType": "SOURCE_STATE_ERROR_CLUSTER",
    "status": "Failed"
  }
}
```

## Additional information and links

- **Trigger Type**: [FIRE_AND_FORGET](../trigger-types.md#fire-and-forget)
- [Input schema](https://developer.sailpoint.com/apis/beta/#section/VA-Cluster-Status-Change-Event-Event-Trigger-Input)
