---
id: v2024-managed-client
title: ManagedClient
pagination_label: ManagedClient
sidebar_label: ManagedClient
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedClient', 'V2024ManagedClient'] 
slug: /tools/sdk/go/v2024/models/managed-client
tags: ['SDK', 'Software Development Kit', 'ManagedClient', 'V2024ManagedClient']
---

# ManagedClient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableString** | ManagedClient ID | [optional] [readonly] 
**AlertKey** | Pointer to **NullableString** | ManagedClient alert key | [optional] [readonly] 
**ApiGatewayBaseUrl** | Pointer to **NullableString** | apiGatewayBaseUrl for the Managed client | [optional] 
**Cookbook** | Pointer to **NullableString** | cookbook id for the Managed client | [optional] 
**CcId** | Pointer to **NullableInt64** | Previous CC ID to be used in data migration. (This field will be deleted after CC migration!) | [optional] 
**ClientId** | **string** | The client ID used in API management | 
**ClusterId** | **string** | Cluster ID that the ManagedClient is linked to | 
**Description** | **string** | ManagedClient description | [default to ""]
**IpAddress** | Pointer to **NullableString** | The public IP address of the ManagedClient | [optional] [readonly] 
**LastSeen** | Pointer to **NullableTime** | When the ManagedClient was last seen by the server | [optional] [readonly] 
**Name** | Pointer to **NullableString** | ManagedClient name | [optional] [default to "VA-$clientId"]
**SinceLastSeen** | Pointer to **NullableString** | Milliseconds since the ManagedClient has polled the server | [optional] [readonly] 
**Status** | Pointer to **NullableString** | Status of the ManagedClient | [optional] [readonly] 
**Type** | **string** | Type of the ManagedClient (VA, CCG) | 
**ClusterType** | Pointer to **NullableString** | Cluster Type of the ManagedClient | [optional] [readonly] 
**VaDownloadUrl** | Pointer to **NullableString** | ManagedClient VA download URL | [optional] [readonly] 
**VaVersion** | Pointer to **NullableString** | Version that the ManagedClient's VA is running | [optional] [readonly] 
**Secret** | Pointer to **NullableString** | Client's apiKey | [optional] 
**CreatedAt** | Pointer to **NullableTime** | The date/time this ManagedClient was created | [optional] 
**UpdatedAt** | Pointer to **NullableTime** | The date/time this ManagedClient was last updated | [optional] 
**ProvisionStatus** | Pointer to **NullableString** | The provisioning status of the ManagedClient | [optional] [readonly] 
**HealthIndicators** | Pointer to **map[string]interface{}** | The health indicators of the ManagedClient | [optional] 

## Methods

### NewManagedClient

`func NewManagedClient(clientId string, clusterId string, description string, type_ string, ) *ManagedClient`

NewManagedClient instantiates a new ManagedClient object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedClientWithDefaults

`func NewManagedClientWithDefaults() *ManagedClient`

NewManagedClientWithDefaults instantiates a new ManagedClient object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ManagedClient) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ManagedClient) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ManagedClient) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ManagedClient) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *ManagedClient) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *ManagedClient) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetAlertKey

`func (o *ManagedClient) GetAlertKey() string`

GetAlertKey returns the AlertKey field if non-nil, zero value otherwise.

### GetAlertKeyOk

`func (o *ManagedClient) GetAlertKeyOk() (*string, bool)`

GetAlertKeyOk returns a tuple with the AlertKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertKey

`func (o *ManagedClient) SetAlertKey(v string)`

SetAlertKey sets AlertKey field to given value.

### HasAlertKey

`func (o *ManagedClient) HasAlertKey() bool`

HasAlertKey returns a boolean if a field has been set.

### SetAlertKeyNil

`func (o *ManagedClient) SetAlertKeyNil(b bool)`

 SetAlertKeyNil sets the value for AlertKey to be an explicit nil

### UnsetAlertKey
`func (o *ManagedClient) UnsetAlertKey()`

UnsetAlertKey ensures that no value is present for AlertKey, not even an explicit nil
### GetApiGatewayBaseUrl

`func (o *ManagedClient) GetApiGatewayBaseUrl() string`

GetApiGatewayBaseUrl returns the ApiGatewayBaseUrl field if non-nil, zero value otherwise.

### GetApiGatewayBaseUrlOk

`func (o *ManagedClient) GetApiGatewayBaseUrlOk() (*string, bool)`

GetApiGatewayBaseUrlOk returns a tuple with the ApiGatewayBaseUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiGatewayBaseUrl

`func (o *ManagedClient) SetApiGatewayBaseUrl(v string)`

SetApiGatewayBaseUrl sets ApiGatewayBaseUrl field to given value.

### HasApiGatewayBaseUrl

`func (o *ManagedClient) HasApiGatewayBaseUrl() bool`

HasApiGatewayBaseUrl returns a boolean if a field has been set.

### SetApiGatewayBaseUrlNil

`func (o *ManagedClient) SetApiGatewayBaseUrlNil(b bool)`

 SetApiGatewayBaseUrlNil sets the value for ApiGatewayBaseUrl to be an explicit nil

### UnsetApiGatewayBaseUrl
`func (o *ManagedClient) UnsetApiGatewayBaseUrl()`

UnsetApiGatewayBaseUrl ensures that no value is present for ApiGatewayBaseUrl, not even an explicit nil
### GetCookbook

`func (o *ManagedClient) GetCookbook() string`

GetCookbook returns the Cookbook field if non-nil, zero value otherwise.

### GetCookbookOk

`func (o *ManagedClient) GetCookbookOk() (*string, bool)`

GetCookbookOk returns a tuple with the Cookbook field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCookbook

`func (o *ManagedClient) SetCookbook(v string)`

SetCookbook sets Cookbook field to given value.

### HasCookbook

`func (o *ManagedClient) HasCookbook() bool`

HasCookbook returns a boolean if a field has been set.

### SetCookbookNil

`func (o *ManagedClient) SetCookbookNil(b bool)`

 SetCookbookNil sets the value for Cookbook to be an explicit nil

### UnsetCookbook
`func (o *ManagedClient) UnsetCookbook()`

UnsetCookbook ensures that no value is present for Cookbook, not even an explicit nil
### GetCcId

`func (o *ManagedClient) GetCcId() int64`

GetCcId returns the CcId field if non-nil, zero value otherwise.

### GetCcIdOk

`func (o *ManagedClient) GetCcIdOk() (*int64, bool)`

GetCcIdOk returns a tuple with the CcId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcId

`func (o *ManagedClient) SetCcId(v int64)`

SetCcId sets CcId field to given value.

### HasCcId

`func (o *ManagedClient) HasCcId() bool`

HasCcId returns a boolean if a field has been set.

### SetCcIdNil

`func (o *ManagedClient) SetCcIdNil(b bool)`

 SetCcIdNil sets the value for CcId to be an explicit nil

### UnsetCcId
`func (o *ManagedClient) UnsetCcId()`

UnsetCcId ensures that no value is present for CcId, not even an explicit nil
### GetClientId

`func (o *ManagedClient) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *ManagedClient) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *ManagedClient) SetClientId(v string)`

SetClientId sets ClientId field to given value.


### GetClusterId

`func (o *ManagedClient) GetClusterId() string`

GetClusterId returns the ClusterId field if non-nil, zero value otherwise.

### GetClusterIdOk

`func (o *ManagedClient) GetClusterIdOk() (*string, bool)`

GetClusterIdOk returns a tuple with the ClusterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusterId

`func (o *ManagedClient) SetClusterId(v string)`

SetClusterId sets ClusterId field to given value.


### GetDescription

`func (o *ManagedClient) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ManagedClient) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ManagedClient) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetIpAddress

`func (o *ManagedClient) GetIpAddress() string`

GetIpAddress returns the IpAddress field if non-nil, zero value otherwise.

### GetIpAddressOk

`func (o *ManagedClient) GetIpAddressOk() (*string, bool)`

GetIpAddressOk returns a tuple with the IpAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIpAddress

`func (o *ManagedClient) SetIpAddress(v string)`

SetIpAddress sets IpAddress field to given value.

### HasIpAddress

`func (o *ManagedClient) HasIpAddress() bool`

HasIpAddress returns a boolean if a field has been set.

### SetIpAddressNil

`func (o *ManagedClient) SetIpAddressNil(b bool)`

 SetIpAddressNil sets the value for IpAddress to be an explicit nil

### UnsetIpAddress
`func (o *ManagedClient) UnsetIpAddress()`

UnsetIpAddress ensures that no value is present for IpAddress, not even an explicit nil
### GetLastSeen

`func (o *ManagedClient) GetLastSeen() SailPointTime`

GetLastSeen returns the LastSeen field if non-nil, zero value otherwise.

### GetLastSeenOk

`func (o *ManagedClient) GetLastSeenOk() (*SailPointTime, bool)`

GetLastSeenOk returns a tuple with the LastSeen field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastSeen

`func (o *ManagedClient) SetLastSeen(v SailPointTime)`

SetLastSeen sets LastSeen field to given value.

### HasLastSeen

`func (o *ManagedClient) HasLastSeen() bool`

HasLastSeen returns a boolean if a field has been set.

### SetLastSeenNil

`func (o *ManagedClient) SetLastSeenNil(b bool)`

 SetLastSeenNil sets the value for LastSeen to be an explicit nil

### UnsetLastSeen
`func (o *ManagedClient) UnsetLastSeen()`

UnsetLastSeen ensures that no value is present for LastSeen, not even an explicit nil
### GetName

`func (o *ManagedClient) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ManagedClient) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ManagedClient) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ManagedClient) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *ManagedClient) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *ManagedClient) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetSinceLastSeen

`func (o *ManagedClient) GetSinceLastSeen() string`

GetSinceLastSeen returns the SinceLastSeen field if non-nil, zero value otherwise.

### GetSinceLastSeenOk

`func (o *ManagedClient) GetSinceLastSeenOk() (*string, bool)`

GetSinceLastSeenOk returns a tuple with the SinceLastSeen field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSinceLastSeen

`func (o *ManagedClient) SetSinceLastSeen(v string)`

SetSinceLastSeen sets SinceLastSeen field to given value.

### HasSinceLastSeen

`func (o *ManagedClient) HasSinceLastSeen() bool`

HasSinceLastSeen returns a boolean if a field has been set.

### SetSinceLastSeenNil

`func (o *ManagedClient) SetSinceLastSeenNil(b bool)`

 SetSinceLastSeenNil sets the value for SinceLastSeen to be an explicit nil

### UnsetSinceLastSeen
`func (o *ManagedClient) UnsetSinceLastSeen()`

UnsetSinceLastSeen ensures that no value is present for SinceLastSeen, not even an explicit nil
### GetStatus

`func (o *ManagedClient) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ManagedClient) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ManagedClient) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ManagedClient) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### SetStatusNil

`func (o *ManagedClient) SetStatusNil(b bool)`

 SetStatusNil sets the value for Status to be an explicit nil

### UnsetStatus
`func (o *ManagedClient) UnsetStatus()`

UnsetStatus ensures that no value is present for Status, not even an explicit nil
### GetType

`func (o *ManagedClient) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ManagedClient) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ManagedClient) SetType(v string)`

SetType sets Type field to given value.


### GetClusterType

`func (o *ManagedClient) GetClusterType() string`

GetClusterType returns the ClusterType field if non-nil, zero value otherwise.

### GetClusterTypeOk

`func (o *ManagedClient) GetClusterTypeOk() (*string, bool)`

GetClusterTypeOk returns a tuple with the ClusterType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusterType

`func (o *ManagedClient) SetClusterType(v string)`

SetClusterType sets ClusterType field to given value.

### HasClusterType

`func (o *ManagedClient) HasClusterType() bool`

HasClusterType returns a boolean if a field has been set.

### SetClusterTypeNil

`func (o *ManagedClient) SetClusterTypeNil(b bool)`

 SetClusterTypeNil sets the value for ClusterType to be an explicit nil

### UnsetClusterType
`func (o *ManagedClient) UnsetClusterType()`

UnsetClusterType ensures that no value is present for ClusterType, not even an explicit nil
### GetVaDownloadUrl

`func (o *ManagedClient) GetVaDownloadUrl() string`

GetVaDownloadUrl returns the VaDownloadUrl field if non-nil, zero value otherwise.

### GetVaDownloadUrlOk

`func (o *ManagedClient) GetVaDownloadUrlOk() (*string, bool)`

GetVaDownloadUrlOk returns a tuple with the VaDownloadUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVaDownloadUrl

`func (o *ManagedClient) SetVaDownloadUrl(v string)`

SetVaDownloadUrl sets VaDownloadUrl field to given value.

### HasVaDownloadUrl

`func (o *ManagedClient) HasVaDownloadUrl() bool`

HasVaDownloadUrl returns a boolean if a field has been set.

### SetVaDownloadUrlNil

`func (o *ManagedClient) SetVaDownloadUrlNil(b bool)`

 SetVaDownloadUrlNil sets the value for VaDownloadUrl to be an explicit nil

### UnsetVaDownloadUrl
`func (o *ManagedClient) UnsetVaDownloadUrl()`

UnsetVaDownloadUrl ensures that no value is present for VaDownloadUrl, not even an explicit nil
### GetVaVersion

`func (o *ManagedClient) GetVaVersion() string`

GetVaVersion returns the VaVersion field if non-nil, zero value otherwise.

### GetVaVersionOk

`func (o *ManagedClient) GetVaVersionOk() (*string, bool)`

GetVaVersionOk returns a tuple with the VaVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVaVersion

`func (o *ManagedClient) SetVaVersion(v string)`

SetVaVersion sets VaVersion field to given value.

### HasVaVersion

`func (o *ManagedClient) HasVaVersion() bool`

HasVaVersion returns a boolean if a field has been set.

### SetVaVersionNil

`func (o *ManagedClient) SetVaVersionNil(b bool)`

 SetVaVersionNil sets the value for VaVersion to be an explicit nil

### UnsetVaVersion
`func (o *ManagedClient) UnsetVaVersion()`

UnsetVaVersion ensures that no value is present for VaVersion, not even an explicit nil
### GetSecret

`func (o *ManagedClient) GetSecret() string`

GetSecret returns the Secret field if non-nil, zero value otherwise.

### GetSecretOk

`func (o *ManagedClient) GetSecretOk() (*string, bool)`

GetSecretOk returns a tuple with the Secret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecret

`func (o *ManagedClient) SetSecret(v string)`

SetSecret sets Secret field to given value.

### HasSecret

`func (o *ManagedClient) HasSecret() bool`

HasSecret returns a boolean if a field has been set.

### SetSecretNil

`func (o *ManagedClient) SetSecretNil(b bool)`

 SetSecretNil sets the value for Secret to be an explicit nil

### UnsetSecret
`func (o *ManagedClient) UnsetSecret()`

UnsetSecret ensures that no value is present for Secret, not even an explicit nil
### GetCreatedAt

`func (o *ManagedClient) GetCreatedAt() SailPointTime`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ManagedClient) GetCreatedAtOk() (*SailPointTime, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ManagedClient) SetCreatedAt(v SailPointTime)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *ManagedClient) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### SetCreatedAtNil

`func (o *ManagedClient) SetCreatedAtNil(b bool)`

 SetCreatedAtNil sets the value for CreatedAt to be an explicit nil

### UnsetCreatedAt
`func (o *ManagedClient) UnsetCreatedAt()`

UnsetCreatedAt ensures that no value is present for CreatedAt, not even an explicit nil
### GetUpdatedAt

`func (o *ManagedClient) GetUpdatedAt() SailPointTime`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *ManagedClient) GetUpdatedAtOk() (*SailPointTime, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *ManagedClient) SetUpdatedAt(v SailPointTime)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *ManagedClient) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### SetUpdatedAtNil

`func (o *ManagedClient) SetUpdatedAtNil(b bool)`

 SetUpdatedAtNil sets the value for UpdatedAt to be an explicit nil

### UnsetUpdatedAt
`func (o *ManagedClient) UnsetUpdatedAt()`

UnsetUpdatedAt ensures that no value is present for UpdatedAt, not even an explicit nil
### GetProvisionStatus

`func (o *ManagedClient) GetProvisionStatus() string`

GetProvisionStatus returns the ProvisionStatus field if non-nil, zero value otherwise.

### GetProvisionStatusOk

`func (o *ManagedClient) GetProvisionStatusOk() (*string, bool)`

GetProvisionStatusOk returns a tuple with the ProvisionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisionStatus

`func (o *ManagedClient) SetProvisionStatus(v string)`

SetProvisionStatus sets ProvisionStatus field to given value.

### HasProvisionStatus

`func (o *ManagedClient) HasProvisionStatus() bool`

HasProvisionStatus returns a boolean if a field has been set.

### SetProvisionStatusNil

`func (o *ManagedClient) SetProvisionStatusNil(b bool)`

 SetProvisionStatusNil sets the value for ProvisionStatus to be an explicit nil

### UnsetProvisionStatus
`func (o *ManagedClient) UnsetProvisionStatus()`

UnsetProvisionStatus ensures that no value is present for ProvisionStatus, not even an explicit nil
### GetHealthIndicators

`func (o *ManagedClient) GetHealthIndicators() map[string]interface{}`

GetHealthIndicators returns the HealthIndicators field if non-nil, zero value otherwise.

### GetHealthIndicatorsOk

`func (o *ManagedClient) GetHealthIndicatorsOk() (*map[string]interface{}, bool)`

GetHealthIndicatorsOk returns a tuple with the HealthIndicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHealthIndicators

`func (o *ManagedClient) SetHealthIndicators(v map[string]interface{})`

SetHealthIndicators sets HealthIndicators field to given value.

### HasHealthIndicators

`func (o *ManagedClient) HasHealthIndicators() bool`

HasHealthIndicators returns a boolean if a field has been set.

### SetHealthIndicatorsNil

`func (o *ManagedClient) SetHealthIndicatorsNil(b bool)`

 SetHealthIndicatorsNil sets the value for HealthIndicators to be an explicit nil

### UnsetHealthIndicators
`func (o *ManagedClient) UnsetHealthIndicators()`

UnsetHealthIndicators ensures that no value is present for HealthIndicators, not even an explicit nil

