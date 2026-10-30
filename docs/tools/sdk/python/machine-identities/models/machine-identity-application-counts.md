# MachineIdentityApplicationCounts

# MachineIdentityApplicationCounts

Tenant-wide summary counts for application machine identities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_count** | **int** | Total number of applications. | [optional] 
**unsanctioned_application_count** | **int** | Number of applications that are not sanctioned. | [optional] 
**discovered** | [**MachineIdentityDiscoveredCounts**](machine-identity-discovered-counts) |  | [optional] 
**risk_severity** | [**MachineIdentityRiskSeverityCounts**](machine-identity-risk-severity-counts) |  | [optional] 
**ownership** | [**MachineIdentityApplicationCountsOwnership**](machine-identity-application-counts-ownership) |  | [optional] 
\}

## Example

```python
from sailpoint.machine_identities.models.machine_identity_application_counts import MachineIdentityApplicationCounts

machine_identity_application_counts = MachineIdentityApplicationCounts(
application_count=120,
unsanctioned_application_count=9,
discovered=sailpoint.machine_identities.models.machine_identity_discovered_counts.Machine Identity Discovered Counts(
                    count = 8, 
                    window_days = 30, ),
risk_severity=sailpoint.machine_identities.models.machine_identity_risk_severity_counts.Machine Identity Risk Severity Counts(
                    critical = 3, 
                    high = 12, 
                    medium = 25, 
                    low = 40, 
                    unknown = 5, ),
ownership=sailpoint.machine_identities.models.machine_identity_application_counts_ownership.MachineIdentityApplicationCounts_ownership(
                    owned_applications = 95, 
                    owned_percent = 79, )
)

```
[[Back to top]](#) 

