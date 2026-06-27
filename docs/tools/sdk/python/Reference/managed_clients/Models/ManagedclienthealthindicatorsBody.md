---
id: managedclienthealthindicators-body
title: ManagedclienthealthindicatorsBody
pagination_label: ManagedclienthealthindicatorsBody
sidebar_label: ManagedclienthealthindicatorsBody
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ManagedclienthealthindicatorsBody', 'ManagedclienthealthindicatorsBody'] 
slug: /tools/sdk/python/managed-clients/models/managedclienthealthindicators-body
tags: ['SDK', 'Software Development Kit', 'ManagedclienthealthindicatorsBody', 'ManagedclienthealthindicatorsBody']
---

# ManagedclienthealthindicatorsBody

Health indicator details from the Managed Client

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_key** | **str** | Health indicator alert key | [optional] [readonly] 
**id** | **str** | Unique identifier for the health report | [required]
**cluster_id** | **str** | Cluster ID the health report belongs to | [required]
**api_user** | **str** | API user ID sending the health data | [required]
**ccg_etag** | **str** | ETag value for CCG version control | [optional] 
**ccg_pin** | **str** | PIN value for CCG validation | [optional] 
**cookbook_etag** | **str** | ETag for cookbook version | [optional] 
**hostname** | **str** | Hostname of the Managed Client | [required]
**internal_ip** | **str** | Internal IP address of the Managed Client | [optional] 
**last_seen** | **str** | Epoch timestamp (in millis) when last seen | [optional] 
**since_seen** | **str** | Seconds since last seen | [optional] 
**since_seen_millis** | **str** | Milliseconds since last seen | [optional] 
**local_dev** | **bool** | Indicates if this is a local development instance | [optional] [default to False]
**stacktrace** | **str** | Stacktrace associated with any error, if available | [optional] 
**state** | **str** | Optional state value from the client | [optional] 
**status** |  **Enum** [  'NORMAL',    'UNDEFINED',    'WARNING',    'ERROR',    'FAILED' ] | Status of the client at the time of report | [required]
**uuid** | **str** | Optional UUID from the client | [optional] 
**product** | **str** | Product type (e.g., idn) | [required]
**va_version** | **str** | VA version installed on the client | [optional] 
**platform_version** | **str** | Version of the platform on which VA is running | [required]
**os_version** | **str** | Operating system version | [required]
**os_type** | **str** | Operating system type | [required]
**hypervisor** | **str** | Virtualization platform used | [required]
**consolidated_health_indicators_status** |  **Enum** [  'NORMAL',    'WARNING',    'ERROR' ] | Consolidated health indicator status | [required]
**last_notified_ccg_version** | **str** | The last CCG version for which notification was sent | [optional] 
**deployed_processes** | **str** | Information about deployed processes | [optional] 
**health_indicators** | [**ManagedclienthealthindicatorsBodyHealthIndicators**](managedclienthealthindicators-body-health-indicators) |  | [required]
}

## Example

```python
from sailpoint.managed_clients.models.managedclienthealthindicators_body import ManagedclienthealthindicatorsBody

managedclienthealthindicators_body = ManagedclienthealthindicatorsBody(
alert_key='',
id='9fe8f1cc-2fd2-4675-a8cf-af4b43488ca2',
cluster_id='c2a2139cbc754e42b4279a69ec5f58ec',
api_user='9fe8f1cc-2fd2-4675-a8cf-af4b43488ca2',
ccg_etag='c95e5c4417952dbcc9b4974999ece14e',
ccg_pin='NONE',
cookbook_etag='3018-master-2ce6ac16-20250717124641-3077-master-a101b5fe-20250722162527',
hostname='Testing1',
internal_ip='172.18.54.5',
last_seen='1754465728720',
since_seen='23195',
since_seen_millis='23195',
local_dev=False,
stacktrace='',
state='',
status='NORMAL',
uuid='',
product='idn',
va_version='',
platform_version='2',
os_version='4230.2.1',
os_type='flatcar',
hypervisor='vmware',
consolidated_health_indicators_status='ERROR',
last_notified_ccg_version='1068',
deployed_processes='',
health_indicators=sailpoint.managed_clients.models.managedclienthealthindicators_body_health_indicators.managedclienthealthindicators_body_health_indicators(
                    container = sailpoint.managed_clients.models.healthindicatorcategory.healthindicatorcategory(
                        errors = [
                            sailpoint.managed_clients.models.healthevent.healthevent(
                                detailed_message = 'CPU utilization is high', 
                                uuid = '5', 
                                url = 'https://example.com:80/', 
                                timestamp = '2025-03-25T14:46:58.605Z', 
                                last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                                cpu_utilization_percentage = 80, 
                                free_space_percentage = 8, )
                            ], 
                        warnings = [
                            sailpoint.managed_clients.models.healthevent.healthevent(
                                detailed_message = 'CPU utilization is high', 
                                uuid = '5', 
                                url = 'https://example.com:80/', 
                                timestamp = '2025-03-25T14:46:58.605Z', 
                                last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                                cpu_utilization_percentage = 80, 
                                free_space_percentage = 8, )
                            ], ), 
                    memory = sailpoint.managed_clients.models.healthindicatorcategory.healthindicatorcategory(), 
                    cpu = , )
)

```
[[Back to top]](#) 

