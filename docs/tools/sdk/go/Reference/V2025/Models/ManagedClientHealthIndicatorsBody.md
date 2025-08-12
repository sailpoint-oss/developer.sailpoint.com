---
id: v2025-managed-client-health-indicators-body
title: ManagedClientHealthIndicatorsBody
pagination_label: ManagedClientHealthIndicatorsBody
sidebar_label: ManagedClientHealthIndicatorsBody
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedClientHealthIndicatorsBody', 'V2025ManagedClientHealthIndicatorsBody'] 
slug: /tools/sdk/go/v2025/models/managed-client-health-indicators-body
tags: ['SDK', 'Software Development Kit', 'ManagedClientHealthIndicatorsBody', 'V2025ManagedClientHealthIndicatorsBody']
---

# ManagedClientHealthIndicatorsBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlertKey** | Pointer to **NullableString** | Health indicator alert key | [optional] [readonly] 
**Id** | **string** | Unique identifier for the health report | 
**ClusterId** | **string** | Cluster ID the health report belongs to | 
**ApiUser** | **string** | API user ID sending the health data | 
**CcgEtag** | Pointer to **NullableString** | ETag value for CCG version control | [optional] 
**CcgPin** | Pointer to **NullableString** | PIN value for CCG validation | [optional] 
**CookbookEtag** | Pointer to **NullableString** | ETag for cookbook version | [optional] 
**Hostname** | **string** | Hostname of the Managed Client | 
**InternalIp** | Pointer to **string** | Internal IP address of the Managed Client | [optional] 
**LastSeen** | Pointer to **string** | Epoch timestamp (in millis) when last seen | [optional] 
**SinceSeen** | Pointer to **string** | Seconds since last seen | [optional] 
**SinceSeenMillis** | Pointer to **string** | Milliseconds since last seen | [optional] 
**LocalDev** | Pointer to **bool** | Indicates if this is a local development instance | [optional] [default to false]
**Stacktrace** | Pointer to **NullableString** | Stacktrace associated with any error, if available | [optional] 
**State** | Pointer to **NullableString** | Optional state value from the client | [optional] 
**Status** | **string** | Status of the client at the time of report | 
**Uuid** | Pointer to **NullableString** | Optional UUID from the client | [optional] 
**Product** | **string** | Product type (e.g., idn) | 
**VaVersion** | Pointer to **NullableString** | VA version installed on the client | [optional] 
**PlatformVersion** | **string** | Version of the platform on which VA is running | 
**OsVersion** | **string** | Operating system version | 
**OsType** | **string** | Operating system type | 
**Hypervisor** | **string** | Virtualization platform used | 
**ConsolidatedHealthIndicatorsStatus** | **string** | Consolidated health indicator status | 
**LastNotifiedCcgVersion** | Pointer to **string** | The last CCG version for which notification was sent | [optional] 
**DeployedProcesses** | Pointer to **NullableString** | Information about deployed processes | [optional] 
**HealthIndicators** | [**ManagedClientHealthIndicatorsBodyHealthIndicators**](managed-client-health-indicators-body-health-indicators) |  | 

## Methods

### NewManagedClientHealthIndicatorsBody

`func NewManagedClientHealthIndicatorsBody(id string, clusterId string, apiUser string, hostname string, status string, product string, platformVersion string, osVersion string, osType string, hypervisor string, consolidatedHealthIndicatorsStatus string, healthIndicators ManagedClientHealthIndicatorsBodyHealthIndicators, ) *ManagedClientHealthIndicatorsBody`

NewManagedClientHealthIndicatorsBody instantiates a new ManagedClientHealthIndicatorsBody object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedClientHealthIndicatorsBodyWithDefaults

`func NewManagedClientHealthIndicatorsBodyWithDefaults() *ManagedClientHealthIndicatorsBody`

NewManagedClientHealthIndicatorsBodyWithDefaults instantiates a new ManagedClientHealthIndicatorsBody object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlertKey

`func (o *ManagedClientHealthIndicatorsBody) GetAlertKey() string`

GetAlertKey returns the AlertKey field if non-nil, zero value otherwise.

### GetAlertKeyOk

`func (o *ManagedClientHealthIndicatorsBody) GetAlertKeyOk() (*string, bool)`

GetAlertKeyOk returns a tuple with the AlertKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertKey

`func (o *ManagedClientHealthIndicatorsBody) SetAlertKey(v string)`

SetAlertKey sets AlertKey field to given value.

### HasAlertKey

`func (o *ManagedClientHealthIndicatorsBody) HasAlertKey() bool`

HasAlertKey returns a boolean if a field has been set.

### SetAlertKeyNil

`func (o *ManagedClientHealthIndicatorsBody) SetAlertKeyNil(b bool)`

 SetAlertKeyNil sets the value for AlertKey to be an explicit nil

### UnsetAlertKey
`func (o *ManagedClientHealthIndicatorsBody) UnsetAlertKey()`

UnsetAlertKey ensures that no value is present for AlertKey, not even an explicit nil
### GetId

`func (o *ManagedClientHealthIndicatorsBody) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ManagedClientHealthIndicatorsBody) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ManagedClientHealthIndicatorsBody) SetId(v string)`

SetId sets Id field to given value.


### GetClusterId

`func (o *ManagedClientHealthIndicatorsBody) GetClusterId() string`

GetClusterId returns the ClusterId field if non-nil, zero value otherwise.

### GetClusterIdOk

`func (o *ManagedClientHealthIndicatorsBody) GetClusterIdOk() (*string, bool)`

GetClusterIdOk returns a tuple with the ClusterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusterId

`func (o *ManagedClientHealthIndicatorsBody) SetClusterId(v string)`

SetClusterId sets ClusterId field to given value.


### GetApiUser

`func (o *ManagedClientHealthIndicatorsBody) GetApiUser() string`

GetApiUser returns the ApiUser field if non-nil, zero value otherwise.

### GetApiUserOk

`func (o *ManagedClientHealthIndicatorsBody) GetApiUserOk() (*string, bool)`

GetApiUserOk returns a tuple with the ApiUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiUser

`func (o *ManagedClientHealthIndicatorsBody) SetApiUser(v string)`

SetApiUser sets ApiUser field to given value.


### GetCcgEtag

`func (o *ManagedClientHealthIndicatorsBody) GetCcgEtag() string`

GetCcgEtag returns the CcgEtag field if non-nil, zero value otherwise.

### GetCcgEtagOk

`func (o *ManagedClientHealthIndicatorsBody) GetCcgEtagOk() (*string, bool)`

GetCcgEtagOk returns a tuple with the CcgEtag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcgEtag

`func (o *ManagedClientHealthIndicatorsBody) SetCcgEtag(v string)`

SetCcgEtag sets CcgEtag field to given value.

### HasCcgEtag

`func (o *ManagedClientHealthIndicatorsBody) HasCcgEtag() bool`

HasCcgEtag returns a boolean if a field has been set.

### SetCcgEtagNil

`func (o *ManagedClientHealthIndicatorsBody) SetCcgEtagNil(b bool)`

 SetCcgEtagNil sets the value for CcgEtag to be an explicit nil

### UnsetCcgEtag
`func (o *ManagedClientHealthIndicatorsBody) UnsetCcgEtag()`

UnsetCcgEtag ensures that no value is present for CcgEtag, not even an explicit nil
### GetCcgPin

`func (o *ManagedClientHealthIndicatorsBody) GetCcgPin() string`

GetCcgPin returns the CcgPin field if non-nil, zero value otherwise.

### GetCcgPinOk

`func (o *ManagedClientHealthIndicatorsBody) GetCcgPinOk() (*string, bool)`

GetCcgPinOk returns a tuple with the CcgPin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcgPin

`func (o *ManagedClientHealthIndicatorsBody) SetCcgPin(v string)`

SetCcgPin sets CcgPin field to given value.

### HasCcgPin

`func (o *ManagedClientHealthIndicatorsBody) HasCcgPin() bool`

HasCcgPin returns a boolean if a field has been set.

### SetCcgPinNil

`func (o *ManagedClientHealthIndicatorsBody) SetCcgPinNil(b bool)`

 SetCcgPinNil sets the value for CcgPin to be an explicit nil

### UnsetCcgPin
`func (o *ManagedClientHealthIndicatorsBody) UnsetCcgPin()`

UnsetCcgPin ensures that no value is present for CcgPin, not even an explicit nil
### GetCookbookEtag

`func (o *ManagedClientHealthIndicatorsBody) GetCookbookEtag() string`

GetCookbookEtag returns the CookbookEtag field if non-nil, zero value otherwise.

### GetCookbookEtagOk

`func (o *ManagedClientHealthIndicatorsBody) GetCookbookEtagOk() (*string, bool)`

GetCookbookEtagOk returns a tuple with the CookbookEtag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCookbookEtag

`func (o *ManagedClientHealthIndicatorsBody) SetCookbookEtag(v string)`

SetCookbookEtag sets CookbookEtag field to given value.

### HasCookbookEtag

`func (o *ManagedClientHealthIndicatorsBody) HasCookbookEtag() bool`

HasCookbookEtag returns a boolean if a field has been set.

### SetCookbookEtagNil

`func (o *ManagedClientHealthIndicatorsBody) SetCookbookEtagNil(b bool)`

 SetCookbookEtagNil sets the value for CookbookEtag to be an explicit nil

### UnsetCookbookEtag
`func (o *ManagedClientHealthIndicatorsBody) UnsetCookbookEtag()`

UnsetCookbookEtag ensures that no value is present for CookbookEtag, not even an explicit nil
### GetHostname

`func (o *ManagedClientHealthIndicatorsBody) GetHostname() string`

GetHostname returns the Hostname field if non-nil, zero value otherwise.

### GetHostnameOk

`func (o *ManagedClientHealthIndicatorsBody) GetHostnameOk() (*string, bool)`

GetHostnameOk returns a tuple with the Hostname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostname

`func (o *ManagedClientHealthIndicatorsBody) SetHostname(v string)`

SetHostname sets Hostname field to given value.


### GetInternalIp

`func (o *ManagedClientHealthIndicatorsBody) GetInternalIp() string`

GetInternalIp returns the InternalIp field if non-nil, zero value otherwise.

### GetInternalIpOk

`func (o *ManagedClientHealthIndicatorsBody) GetInternalIpOk() (*string, bool)`

GetInternalIpOk returns a tuple with the InternalIp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalIp

`func (o *ManagedClientHealthIndicatorsBody) SetInternalIp(v string)`

SetInternalIp sets InternalIp field to given value.

### HasInternalIp

`func (o *ManagedClientHealthIndicatorsBody) HasInternalIp() bool`

HasInternalIp returns a boolean if a field has been set.

### GetLastSeen

`func (o *ManagedClientHealthIndicatorsBody) GetLastSeen() string`

GetLastSeen returns the LastSeen field if non-nil, zero value otherwise.

### GetLastSeenOk

`func (o *ManagedClientHealthIndicatorsBody) GetLastSeenOk() (*string, bool)`

GetLastSeenOk returns a tuple with the LastSeen field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastSeen

`func (o *ManagedClientHealthIndicatorsBody) SetLastSeen(v string)`

SetLastSeen sets LastSeen field to given value.

### HasLastSeen

`func (o *ManagedClientHealthIndicatorsBody) HasLastSeen() bool`

HasLastSeen returns a boolean if a field has been set.

### GetSinceSeen

`func (o *ManagedClientHealthIndicatorsBody) GetSinceSeen() string`

GetSinceSeen returns the SinceSeen field if non-nil, zero value otherwise.

### GetSinceSeenOk

`func (o *ManagedClientHealthIndicatorsBody) GetSinceSeenOk() (*string, bool)`

GetSinceSeenOk returns a tuple with the SinceSeen field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSinceSeen

`func (o *ManagedClientHealthIndicatorsBody) SetSinceSeen(v string)`

SetSinceSeen sets SinceSeen field to given value.

### HasSinceSeen

`func (o *ManagedClientHealthIndicatorsBody) HasSinceSeen() bool`

HasSinceSeen returns a boolean if a field has been set.

### GetSinceSeenMillis

`func (o *ManagedClientHealthIndicatorsBody) GetSinceSeenMillis() string`

GetSinceSeenMillis returns the SinceSeenMillis field if non-nil, zero value otherwise.

### GetSinceSeenMillisOk

`func (o *ManagedClientHealthIndicatorsBody) GetSinceSeenMillisOk() (*string, bool)`

GetSinceSeenMillisOk returns a tuple with the SinceSeenMillis field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSinceSeenMillis

`func (o *ManagedClientHealthIndicatorsBody) SetSinceSeenMillis(v string)`

SetSinceSeenMillis sets SinceSeenMillis field to given value.

### HasSinceSeenMillis

`func (o *ManagedClientHealthIndicatorsBody) HasSinceSeenMillis() bool`

HasSinceSeenMillis returns a boolean if a field has been set.

### GetLocalDev

`func (o *ManagedClientHealthIndicatorsBody) GetLocalDev() bool`

GetLocalDev returns the LocalDev field if non-nil, zero value otherwise.

### GetLocalDevOk

`func (o *ManagedClientHealthIndicatorsBody) GetLocalDevOk() (*bool, bool)`

GetLocalDevOk returns a tuple with the LocalDev field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalDev

`func (o *ManagedClientHealthIndicatorsBody) SetLocalDev(v bool)`

SetLocalDev sets LocalDev field to given value.

### HasLocalDev

`func (o *ManagedClientHealthIndicatorsBody) HasLocalDev() bool`

HasLocalDev returns a boolean if a field has been set.

### GetStacktrace

`func (o *ManagedClientHealthIndicatorsBody) GetStacktrace() string`

GetStacktrace returns the Stacktrace field if non-nil, zero value otherwise.

### GetStacktraceOk

`func (o *ManagedClientHealthIndicatorsBody) GetStacktraceOk() (*string, bool)`

GetStacktraceOk returns a tuple with the Stacktrace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStacktrace

`func (o *ManagedClientHealthIndicatorsBody) SetStacktrace(v string)`

SetStacktrace sets Stacktrace field to given value.

### HasStacktrace

`func (o *ManagedClientHealthIndicatorsBody) HasStacktrace() bool`

HasStacktrace returns a boolean if a field has been set.

### SetStacktraceNil

`func (o *ManagedClientHealthIndicatorsBody) SetStacktraceNil(b bool)`

 SetStacktraceNil sets the value for Stacktrace to be an explicit nil

### UnsetStacktrace
`func (o *ManagedClientHealthIndicatorsBody) UnsetStacktrace()`

UnsetStacktrace ensures that no value is present for Stacktrace, not even an explicit nil
### GetState

`func (o *ManagedClientHealthIndicatorsBody) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *ManagedClientHealthIndicatorsBody) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *ManagedClientHealthIndicatorsBody) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *ManagedClientHealthIndicatorsBody) HasState() bool`

HasState returns a boolean if a field has been set.

### SetStateNil

`func (o *ManagedClientHealthIndicatorsBody) SetStateNil(b bool)`

 SetStateNil sets the value for State to be an explicit nil

### UnsetState
`func (o *ManagedClientHealthIndicatorsBody) UnsetState()`

UnsetState ensures that no value is present for State, not even an explicit nil
### GetStatus

`func (o *ManagedClientHealthIndicatorsBody) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ManagedClientHealthIndicatorsBody) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ManagedClientHealthIndicatorsBody) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetUuid

`func (o *ManagedClientHealthIndicatorsBody) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *ManagedClientHealthIndicatorsBody) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *ManagedClientHealthIndicatorsBody) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *ManagedClientHealthIndicatorsBody) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### SetUuidNil

`func (o *ManagedClientHealthIndicatorsBody) SetUuidNil(b bool)`

 SetUuidNil sets the value for Uuid to be an explicit nil

### UnsetUuid
`func (o *ManagedClientHealthIndicatorsBody) UnsetUuid()`

UnsetUuid ensures that no value is present for Uuid, not even an explicit nil
### GetProduct

`func (o *ManagedClientHealthIndicatorsBody) GetProduct() string`

GetProduct returns the Product field if non-nil, zero value otherwise.

### GetProductOk

`func (o *ManagedClientHealthIndicatorsBody) GetProductOk() (*string, bool)`

GetProductOk returns a tuple with the Product field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProduct

`func (o *ManagedClientHealthIndicatorsBody) SetProduct(v string)`

SetProduct sets Product field to given value.


### GetVaVersion

`func (o *ManagedClientHealthIndicatorsBody) GetVaVersion() string`

GetVaVersion returns the VaVersion field if non-nil, zero value otherwise.

### GetVaVersionOk

`func (o *ManagedClientHealthIndicatorsBody) GetVaVersionOk() (*string, bool)`

GetVaVersionOk returns a tuple with the VaVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVaVersion

`func (o *ManagedClientHealthIndicatorsBody) SetVaVersion(v string)`

SetVaVersion sets VaVersion field to given value.

### HasVaVersion

`func (o *ManagedClientHealthIndicatorsBody) HasVaVersion() bool`

HasVaVersion returns a boolean if a field has been set.

### SetVaVersionNil

`func (o *ManagedClientHealthIndicatorsBody) SetVaVersionNil(b bool)`

 SetVaVersionNil sets the value for VaVersion to be an explicit nil

### UnsetVaVersion
`func (o *ManagedClientHealthIndicatorsBody) UnsetVaVersion()`

UnsetVaVersion ensures that no value is present for VaVersion, not even an explicit nil
### GetPlatformVersion

`func (o *ManagedClientHealthIndicatorsBody) GetPlatformVersion() string`

GetPlatformVersion returns the PlatformVersion field if non-nil, zero value otherwise.

### GetPlatformVersionOk

`func (o *ManagedClientHealthIndicatorsBody) GetPlatformVersionOk() (*string, bool)`

GetPlatformVersionOk returns a tuple with the PlatformVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlatformVersion

`func (o *ManagedClientHealthIndicatorsBody) SetPlatformVersion(v string)`

SetPlatformVersion sets PlatformVersion field to given value.


### GetOsVersion

`func (o *ManagedClientHealthIndicatorsBody) GetOsVersion() string`

GetOsVersion returns the OsVersion field if non-nil, zero value otherwise.

### GetOsVersionOk

`func (o *ManagedClientHealthIndicatorsBody) GetOsVersionOk() (*string, bool)`

GetOsVersionOk returns a tuple with the OsVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOsVersion

`func (o *ManagedClientHealthIndicatorsBody) SetOsVersion(v string)`

SetOsVersion sets OsVersion field to given value.


### GetOsType

`func (o *ManagedClientHealthIndicatorsBody) GetOsType() string`

GetOsType returns the OsType field if non-nil, zero value otherwise.

### GetOsTypeOk

`func (o *ManagedClientHealthIndicatorsBody) GetOsTypeOk() (*string, bool)`

GetOsTypeOk returns a tuple with the OsType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOsType

`func (o *ManagedClientHealthIndicatorsBody) SetOsType(v string)`

SetOsType sets OsType field to given value.


### GetHypervisor

`func (o *ManagedClientHealthIndicatorsBody) GetHypervisor() string`

GetHypervisor returns the Hypervisor field if non-nil, zero value otherwise.

### GetHypervisorOk

`func (o *ManagedClientHealthIndicatorsBody) GetHypervisorOk() (*string, bool)`

GetHypervisorOk returns a tuple with the Hypervisor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHypervisor

`func (o *ManagedClientHealthIndicatorsBody) SetHypervisor(v string)`

SetHypervisor sets Hypervisor field to given value.


### GetConsolidatedHealthIndicatorsStatus

`func (o *ManagedClientHealthIndicatorsBody) GetConsolidatedHealthIndicatorsStatus() string`

GetConsolidatedHealthIndicatorsStatus returns the ConsolidatedHealthIndicatorsStatus field if non-nil, zero value otherwise.

### GetConsolidatedHealthIndicatorsStatusOk

`func (o *ManagedClientHealthIndicatorsBody) GetConsolidatedHealthIndicatorsStatusOk() (*string, bool)`

GetConsolidatedHealthIndicatorsStatusOk returns a tuple with the ConsolidatedHealthIndicatorsStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsolidatedHealthIndicatorsStatus

`func (o *ManagedClientHealthIndicatorsBody) SetConsolidatedHealthIndicatorsStatus(v string)`

SetConsolidatedHealthIndicatorsStatus sets ConsolidatedHealthIndicatorsStatus field to given value.


### GetLastNotifiedCcgVersion

`func (o *ManagedClientHealthIndicatorsBody) GetLastNotifiedCcgVersion() string`

GetLastNotifiedCcgVersion returns the LastNotifiedCcgVersion field if non-nil, zero value otherwise.

### GetLastNotifiedCcgVersionOk

`func (o *ManagedClientHealthIndicatorsBody) GetLastNotifiedCcgVersionOk() (*string, bool)`

GetLastNotifiedCcgVersionOk returns a tuple with the LastNotifiedCcgVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastNotifiedCcgVersion

`func (o *ManagedClientHealthIndicatorsBody) SetLastNotifiedCcgVersion(v string)`

SetLastNotifiedCcgVersion sets LastNotifiedCcgVersion field to given value.

### HasLastNotifiedCcgVersion

`func (o *ManagedClientHealthIndicatorsBody) HasLastNotifiedCcgVersion() bool`

HasLastNotifiedCcgVersion returns a boolean if a field has been set.

### GetDeployedProcesses

`func (o *ManagedClientHealthIndicatorsBody) GetDeployedProcesses() string`

GetDeployedProcesses returns the DeployedProcesses field if non-nil, zero value otherwise.

### GetDeployedProcessesOk

`func (o *ManagedClientHealthIndicatorsBody) GetDeployedProcessesOk() (*string, bool)`

GetDeployedProcessesOk returns a tuple with the DeployedProcesses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeployedProcesses

`func (o *ManagedClientHealthIndicatorsBody) SetDeployedProcesses(v string)`

SetDeployedProcesses sets DeployedProcesses field to given value.

### HasDeployedProcesses

`func (o *ManagedClientHealthIndicatorsBody) HasDeployedProcesses() bool`

HasDeployedProcesses returns a boolean if a field has been set.

### SetDeployedProcessesNil

`func (o *ManagedClientHealthIndicatorsBody) SetDeployedProcessesNil(b bool)`

 SetDeployedProcessesNil sets the value for DeployedProcesses to be an explicit nil

### UnsetDeployedProcesses
`func (o *ManagedClientHealthIndicatorsBody) UnsetDeployedProcesses()`

UnsetDeployedProcesses ensures that no value is present for DeployedProcesses, not even an explicit nil
### GetHealthIndicators

`func (o *ManagedClientHealthIndicatorsBody) GetHealthIndicators() ManagedClientHealthIndicatorsBodyHealthIndicators`

GetHealthIndicators returns the HealthIndicators field if non-nil, zero value otherwise.

### GetHealthIndicatorsOk

`func (o *ManagedClientHealthIndicatorsBody) GetHealthIndicatorsOk() (*ManagedClientHealthIndicatorsBodyHealthIndicators, bool)`

GetHealthIndicatorsOk returns a tuple with the HealthIndicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHealthIndicators

`func (o *ManagedClientHealthIndicatorsBody) SetHealthIndicators(v ManagedClientHealthIndicatorsBodyHealthIndicators)`

SetHealthIndicators sets HealthIndicators field to given value.



