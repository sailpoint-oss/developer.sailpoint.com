# OrgConfig

# OrgConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orgName** | **(optional)** `string` | The name of the org. | [default to undefined]
**timeZone** | **(optional)** `string` | The selected time zone which is to be used for the org.  This directly affects when scheduled tasks are executed.  Valid options can be found at /beta/org-config/valid-time-zones | [default to undefined]
**lcsChangeHonorsSourceEnableFeature** | **(optional)** `boolean` | Flag to determine whether the LCS_CHANGE_HONORS_SOURCE_ENABLE_FEATURE flag is enabled for the current org. | [default to false]
**armCustomerId** | **(optional)** `string` | ARM Customer ID | [default to undefined]
**armSapSystemIdMappings** | **(optional)** `string` | A list of IDN::sourceId to ARM::systemId mappings. | [default to undefined]
**armAuth** | **(optional)** `string` | ARM authentication string | [default to undefined]
**armDb** | **(optional)** `string` | ARM database name | [default to undefined]
**armSsoUrl** | **(optional)** `string` | ARM SSO URL | [default to undefined]
**iaiEnableCertificationRecommendations** | **(optional)** `boolean` | Flag to determine whether IAI Certification Recommendations are enabled for the current org | [default to true]
**aiAgentDeleteRequestEnabled** | **(optional)** `boolean` | Org opt-in flag that enables AI Agent delete-at-source lifecycle requests for the current org. | [default to false]
**sodReportConfigs** | **(optional)** `Array<ReportConfigDTO>` |  | [default to undefined]

