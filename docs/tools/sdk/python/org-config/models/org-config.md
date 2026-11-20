# OrgConfig

# OrgConfig

OrgConfig settings accessible to external customer org admins (`ORG_ADMIN`).  ### Provisioning setting precedence  1. **Source value:** used first when set. When the request spans more than one source, the largest value among those sources wins. 2. **OrgConfig value:** used when no source value is set. 3. **Default:** used when neither is set.  A value outside the allowed range is ignored, and the next level is used.  ### Defaults  * **Retries:** 3 * **Retry interval:** 60 minutes. The actual wait varies by up to 10 percent above or below the interval, so requests that fail together do not retry at the same time. * **Status check interval:** 240 minutes * **Status check limit:** 180 checks  ### Scope  * **Retry count and retry interval:** account enable, disable, unlock, or delete; lifecycle changes that provision accounts; access requests; and RSA token PIN resets. * **Not affected by these settings:** password changes, which use a fixed retry schedule. * **Status check interval and status check limit:** queued provisioning requests. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org_name** | **str** | The name of the org. | [optional] 
**time_zone** | **str** | The selected time zone which is to be used for the org.  This directly affects when scheduled tasks are executed.  Valid options can be found at /beta/org-config/valid-time-zones | [optional] 
**lcs_change_honors_source_enable_feature** | **bool** | Flag to determine whether the LCS_CHANGE_HONORS_SOURCE_ENABLE_FEATURE flag is enabled for the current org. | [optional] [default to False]
**arm_customer_id** | **str** | ARM Customer ID | [optional] 
**arm_sap_system_id_mappings** | [**[]IdnSourceToArmSystem**](idn-source-to-arm-system) | A list of IDN::sourceId to ARM::systemId mappings. | [optional] 
**arm_auth** | **str** | ARM authentication string | [optional] 
**arm_db** | **str** | ARM database name | [optional] 
**arm_sso_url** | **str** | ARM SSO URL | [optional] 
**iai_enable_certification_recommendations** | **bool** | Flag to determine whether IAI Certification Recommendations are enabled for the current org | [optional] [default to True]
**ai_agent_delete_request_enabled** | **bool** | Org opt-in flag that enables AI Agent delete-at-source lifecycle requests for the current org. | [optional] [default to False]
**provisioning_max_retries** | **int** | The number of times a provisioning request is retried. | [optional] 
**provisioning_retry_threshold** | **int** | The number of minutes between provisioning retries. | [optional] 
**provisioning_status_check_interval** | **int** | The number of minutes between status checks of a queued provisioning request. | [optional] 
**provisioning_max_status_checks** | **int** | The number of status checks that run before a queued provisioning request times out. | [optional] 
**sod_report_configs** | [**[]ReportConfigDTO**](report-config-dto) |  | [optional] 
\}

## Example

```python
from sailpoint.org_config.models.org_config import OrgConfig

org_config = OrgConfig(
org_name='acme-solar',
time_zone='America/Toronto',
lcs_change_honors_source_enable_feature=False,
arm_customer_id='DE38E75A-5FF6-4A65-5DC7-08D64426B09E',
arm_sap_system_id_mappings=[{"sourceId":"2c91808c791a94e501792388b0d62659","systemId":"1556"},{"sourceId":"2_2c91808c791a94e501792388b0d62659","systemId":"21556"},{"sourceId":"3_2c91808c791a94e501792388b0d62659","systemId":"31556"}],
arm_auth='epiYNTRYA2S7swisDWk1Zv4VMNgvqEjiBh5_ufuCWsma2m-5XADijqBg0ijXLby5nS6lxZNXabhGnAPGeDGc4V3jQKrhwV-UHypRLs8ZLgOjiQNus9NimS0uPdKomRW6TFWqXyfnYd-znNgbbVuwUy9GyD9ebDVJSntPastxSx7UcyGuWBqfNZYpuxKRWe_7TVY60qL55jUqyz8N4XUbbdcxdbZ0uik6ut-Bv90MKTbZexBW_PR4qcgIkaEs4kIenLyBxnGziYo7AO0tJ8bGHO8FJRkibCpAQIt7PISLo7Gg_Xf9j10dKq2YDgy4pPTvz3fE2ZHYnXCXvXFSA-vVag==',
arm_db='EU',
arm_sso_url='https://your-arm-sso-url',
iai_enable_certification_recommendations=True,
ai_agent_delete_request_enabled=False,
provisioning_max_retries=3,
provisioning_retry_threshold=60,
provisioning_status_check_interval=240,
provisioning_max_status_checks=180,
sod_report_configs=[
                    sailpoint.org_config.models.report_config_dto.Report Config DTO(
                        column_name = 'SOD Business Name', 
                        required = True, 
                        included = False, 
                        order = 2, )
                    ]
)

```
[[Back to top]](#) 

