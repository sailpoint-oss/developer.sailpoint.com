---
id: v1-managedclient
title: Managedclient
pagination_label: Managedclient
sidebar_label: Managedclient
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Managedclient', 'V1Managedclient'] 
slug: /tools/sdk/go/managedclients/models/managedclient
tags: ['SDK', 'Software Development Kit', 'Managedclient', 'V1Managedclient']
---

# Managedclient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableString** | ManagedClient ID | [optional] [readonly] 
**AlertKey** | Pointer to **NullableString** | ManagedClient alert key | [optional] [readonly] 
**ApiGatewayBaseUrl** | Pointer to **NullableString** |  | [optional] 
**Cookbook** | Pointer to **NullableString** |  | [optional] 
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

## Methods

### NewManagedclient

`func NewManagedclient(clientId string, clusterId string, description string, type_ string, ) *Managedclient`

NewManagedclient instantiates a new Managedclient object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedclientWithDefaults

`func NewManagedclientWithDefaults() *Managedclient`

NewManagedclientWithDefaults instantiates a new Managedclient object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Managedclient) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Managedclient) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Managedclient) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Managedclient) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *Managedclient) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *Managedclient) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetAlertKey

`func (o *Managedclient) GetAlertKey() string`

GetAlertKey returns the AlertKey field if non-nil, zero value otherwise.

### GetAlertKeyOk

`func (o *Managedclient) GetAlertKeyOk() (*string, bool)`

GetAlertKeyOk returns a tuple with the AlertKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertKey

`func (o *Managedclient) SetAlertKey(v string)`

SetAlertKey sets AlertKey field to given value.

### HasAlertKey

`func (o *Managedclient) HasAlertKey() bool`

HasAlertKey returns a boolean if a field has been set.

### SetAlertKeyNil

`func (o *Managedclient) SetAlertKeyNil(b bool)`

 SetAlertKeyNil sets the value for AlertKey to be an explicit nil

### UnsetAlertKey
`func (o *Managedclient) UnsetAlertKey()`

UnsetAlertKey ensures that no value is present for AlertKey, not even an explicit nil
### GetApiGatewayBaseUrl

`func (o *Managedclient) GetApiGatewayBaseUrl() string`

GetApiGatewayBaseUrl returns the ApiGatewayBaseUrl field if non-nil, zero value otherwise.

### GetApiGatewayBaseUrlOk

`func (o *Managedclient) GetApiGatewayBaseUrlOk() (*string, bool)`

GetApiGatewayBaseUrlOk returns a tuple with the ApiGatewayBaseUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiGatewayBaseUrl

`func (o *Managedclient) SetApiGatewayBaseUrl(v string)`

SetApiGatewayBaseUrl sets ApiGatewayBaseUrl field to given value.

### HasApiGatewayBaseUrl

`func (o *Managedclient) HasApiGatewayBaseUrl() bool`

HasApiGatewayBaseUrl returns a boolean if a field has been set.

### SetApiGatewayBaseUrlNil

`func (o *Managedclient) SetApiGatewayBaseUrlNil(b bool)`

 SetApiGatewayBaseUrlNil sets the value for ApiGatewayBaseUrl to be an explicit nil

### UnsetApiGatewayBaseUrl
`func (o *Managedclient) UnsetApiGatewayBaseUrl()`

UnsetApiGatewayBaseUrl ensures that no value is present for ApiGatewayBaseUrl, not even an explicit nil
### GetCookbook

`func (o *Managedclient) GetCookbook() string`

GetCookbook returns the Cookbook field if non-nil, zero value otherwise.

### GetCookbookOk

`func (o *Managedclient) GetCookbookOk() (*string, bool)`

GetCookbookOk returns a tuple with the Cookbook field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCookbook

`func (o *Managedclient) SetCookbook(v string)`

SetCookbook sets Cookbook field to given value.

### HasCookbook

`func (o *Managedclient) HasCookbook() bool`

HasCookbook returns a boolean if a field has been set.

### SetCookbookNil

`func (o *Managedclient) SetCookbookNil(b bool)`

 SetCookbookNil sets the value for Cookbook to be an explicit nil

### UnsetCookbook
`func (o *Managedclient) UnsetCookbook()`

UnsetCookbook ensures that no value is present for Cookbook, not even an explicit nil
### GetCcId

`func (o *Managedclient) GetCcId() int64`

GetCcId returns the CcId field if non-nil, zero value otherwise.

### GetCcIdOk

`func (o *Managedclient) GetCcIdOk() (*int64, bool)`

GetCcIdOk returns a tuple with the CcId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcId

`func (o *Managedclient) SetCcId(v int64)`

SetCcId sets CcId field to given value.

### HasCcId

`func (o *Managedclient) HasCcId() bool`

HasCcId returns a boolean if a field has been set.

### SetCcIdNil

`func (o *Managedclient) SetCcIdNil(b bool)`

 SetCcIdNil sets the value for CcId to be an explicit nil

### UnsetCcId
`func (o *Managedclient) UnsetCcId()`

UnsetCcId ensures that no value is present for CcId, not even an explicit nil
### GetClientId

`func (o *Managedclient) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *Managedclient) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *Managedclient) SetClientId(v string)`

SetClientId sets ClientId field to given value.


### GetClusterId

`func (o *Managedclient) GetClusterId() string`

GetClusterId returns the ClusterId field if non-nil, zero value otherwise.

### GetClusterIdOk

`func (o *Managedclient) GetClusterIdOk() (*string, bool)`

GetClusterIdOk returns a tuple with the ClusterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusterId

`func (o *Managedclient) SetClusterId(v string)`

SetClusterId sets ClusterId field to given value.


### GetDescription

`func (o *Managedclient) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Managedclient) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Managedclient) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetIpAddress

`func (o *Managedclient) GetIpAddress() string`

GetIpAddress returns the IpAddress field if non-nil, zero value otherwise.

### GetIpAddressOk

`func (o *Managedclient) GetIpAddressOk() (*string, bool)`

GetIpAddressOk returns a tuple with the IpAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIpAddress

`func (o *Managedclient) SetIpAddress(v string)`

SetIpAddress sets IpAddress field to given value.

### HasIpAddress

`func (o *Managedclient) HasIpAddress() bool`

HasIpAddress returns a boolean if a field has been set.

### SetIpAddressNil

`func (o *Managedclient) SetIpAddressNil(b bool)`

 SetIpAddressNil sets the value for IpAddress to be an explicit nil

### UnsetIpAddress
`func (o *Managedclient) UnsetIpAddress()`

UnsetIpAddress ensures that no value is present for IpAddress, not even an explicit nil
### GetLastSeen

`func (o *Managedclient) GetLastSeen() SailPointTime`

GetLastSeen returns the LastSeen field if non-nil, zero value otherwise.

### GetLastSeenOk

`func (o *Managedclient) GetLastSeenOk() (*SailPointTime, bool)`

GetLastSeenOk returns a tuple with the LastSeen field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastSeen

`func (o *Managedclient) SetLastSeen(v SailPointTime)`

SetLastSeen sets LastSeen field to given value.

### HasLastSeen

`func (o *Managedclient) HasLastSeen() bool`

HasLastSeen returns a boolean if a field has been set.

### SetLastSeenNil

`func (o *Managedclient) SetLastSeenNil(b bool)`

 SetLastSeenNil sets the value for LastSeen to be an explicit nil

### UnsetLastSeen
`func (o *Managedclient) UnsetLastSeen()`

UnsetLastSeen ensures that no value is present for LastSeen, not even an explicit nil
### GetName

`func (o *Managedclient) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Managedclient) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Managedclient) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Managedclient) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Managedclient) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Managedclient) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetSinceLastSeen

`func (o *Managedclient) GetSinceLastSeen() string`

GetSinceLastSeen returns the SinceLastSeen field if non-nil, zero value otherwise.

### GetSinceLastSeenOk

`func (o *Managedclient) GetSinceLastSeenOk() (*string, bool)`

GetSinceLastSeenOk returns a tuple with the SinceLastSeen field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSinceLastSeen

`func (o *Managedclient) SetSinceLastSeen(v string)`

SetSinceLastSeen sets SinceLastSeen field to given value.

### HasSinceLastSeen

`func (o *Managedclient) HasSinceLastSeen() bool`

HasSinceLastSeen returns a boolean if a field has been set.

### SetSinceLastSeenNil

`func (o *Managedclient) SetSinceLastSeenNil(b bool)`

 SetSinceLastSeenNil sets the value for SinceLastSeen to be an explicit nil

### UnsetSinceLastSeen
`func (o *Managedclient) UnsetSinceLastSeen()`

UnsetSinceLastSeen ensures that no value is present for SinceLastSeen, not even an explicit nil
### GetStatus

`func (o *Managedclient) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Managedclient) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Managedclient) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Managedclient) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### SetStatusNil

`func (o *Managedclient) SetStatusNil(b bool)`

 SetStatusNil sets the value for Status to be an explicit nil

### UnsetStatus
`func (o *Managedclient) UnsetStatus()`

UnsetStatus ensures that no value is present for Status, not even an explicit nil
### GetType

`func (o *Managedclient) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Managedclient) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Managedclient) SetType(v string)`

SetType sets Type field to given value.


### GetClusterType

`func (o *Managedclient) GetClusterType() string`

GetClusterType returns the ClusterType field if non-nil, zero value otherwise.

### GetClusterTypeOk

`func (o *Managedclient) GetClusterTypeOk() (*string, bool)`

GetClusterTypeOk returns a tuple with the ClusterType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusterType

`func (o *Managedclient) SetClusterType(v string)`

SetClusterType sets ClusterType field to given value.

### HasClusterType

`func (o *Managedclient) HasClusterType() bool`

HasClusterType returns a boolean if a field has been set.

### SetClusterTypeNil

`func (o *Managedclient) SetClusterTypeNil(b bool)`

 SetClusterTypeNil sets the value for ClusterType to be an explicit nil

### UnsetClusterType
`func (o *Managedclient) UnsetClusterType()`

UnsetClusterType ensures that no value is present for ClusterType, not even an explicit nil
### GetVaDownloadUrl

`func (o *Managedclient) GetVaDownloadUrl() string`

GetVaDownloadUrl returns the VaDownloadUrl field if non-nil, zero value otherwise.

### GetVaDownloadUrlOk

`func (o *Managedclient) GetVaDownloadUrlOk() (*string, bool)`

GetVaDownloadUrlOk returns a tuple with the VaDownloadUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVaDownloadUrl

`func (o *Managedclient) SetVaDownloadUrl(v string)`

SetVaDownloadUrl sets VaDownloadUrl field to given value.

### HasVaDownloadUrl

`func (o *Managedclient) HasVaDownloadUrl() bool`

HasVaDownloadUrl returns a boolean if a field has been set.

### SetVaDownloadUrlNil

`func (o *Managedclient) SetVaDownloadUrlNil(b bool)`

 SetVaDownloadUrlNil sets the value for VaDownloadUrl to be an explicit nil

### UnsetVaDownloadUrl
`func (o *Managedclient) UnsetVaDownloadUrl()`

UnsetVaDownloadUrl ensures that no value is present for VaDownloadUrl, not even an explicit nil
### GetVaVersion

`func (o *Managedclient) GetVaVersion() string`

GetVaVersion returns the VaVersion field if non-nil, zero value otherwise.

### GetVaVersionOk

`func (o *Managedclient) GetVaVersionOk() (*string, bool)`

GetVaVersionOk returns a tuple with the VaVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVaVersion

`func (o *Managedclient) SetVaVersion(v string)`

SetVaVersion sets VaVersion field to given value.

### HasVaVersion

`func (o *Managedclient) HasVaVersion() bool`

HasVaVersion returns a boolean if a field has been set.

### SetVaVersionNil

`func (o *Managedclient) SetVaVersionNil(b bool)`

 SetVaVersionNil sets the value for VaVersion to be an explicit nil

### UnsetVaVersion
`func (o *Managedclient) UnsetVaVersion()`

UnsetVaVersion ensures that no value is present for VaVersion, not even an explicit nil
### GetSecret

`func (o *Managedclient) GetSecret() string`

GetSecret returns the Secret field if non-nil, zero value otherwise.

### GetSecretOk

`func (o *Managedclient) GetSecretOk() (*string, bool)`

GetSecretOk returns a tuple with the Secret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecret

`func (o *Managedclient) SetSecret(v string)`

SetSecret sets Secret field to given value.

### HasSecret

`func (o *Managedclient) HasSecret() bool`

HasSecret returns a boolean if a field has been set.

### SetSecretNil

`func (o *Managedclient) SetSecretNil(b bool)`

 SetSecretNil sets the value for Secret to be an explicit nil

### UnsetSecret
`func (o *Managedclient) UnsetSecret()`

UnsetSecret ensures that no value is present for Secret, not even an explicit nil
### GetCreatedAt

`func (o *Managedclient) GetCreatedAt() SailPointTime`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Managedclient) GetCreatedAtOk() (*SailPointTime, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Managedclient) SetCreatedAt(v SailPointTime)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Managedclient) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### SetCreatedAtNil

`func (o *Managedclient) SetCreatedAtNil(b bool)`

 SetCreatedAtNil sets the value for CreatedAt to be an explicit nil

### UnsetCreatedAt
`func (o *Managedclient) UnsetCreatedAt()`

UnsetCreatedAt ensures that no value is present for CreatedAt, not even an explicit nil
### GetUpdatedAt

`func (o *Managedclient) GetUpdatedAt() SailPointTime`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Managedclient) GetUpdatedAtOk() (*SailPointTime, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Managedclient) SetUpdatedAt(v SailPointTime)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Managedclient) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### SetUpdatedAtNil

`func (o *Managedclient) SetUpdatedAtNil(b bool)`

 SetUpdatedAtNil sets the value for UpdatedAt to be an explicit nil

### UnsetUpdatedAt
`func (o *Managedclient) UnsetUpdatedAt()`

UnsetUpdatedAt ensures that no value is present for UpdatedAt, not even an explicit nil
### GetProvisionStatus

`func (o *Managedclient) GetProvisionStatus() string`

GetProvisionStatus returns the ProvisionStatus field if non-nil, zero value otherwise.

### GetProvisionStatusOk

`func (o *Managedclient) GetProvisionStatusOk() (*string, bool)`

GetProvisionStatusOk returns a tuple with the ProvisionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisionStatus

`func (o *Managedclient) SetProvisionStatus(v string)`

SetProvisionStatus sets ProvisionStatus field to given value.

### HasProvisionStatus

`func (o *Managedclient) HasProvisionStatus() bool`

HasProvisionStatus returns a boolean if a field has been set.

### SetProvisionStatusNil

`func (o *Managedclient) SetProvisionStatusNil(b bool)`

 SetProvisionStatusNil sets the value for ProvisionStatus to be an explicit nil

### UnsetProvisionStatus
`func (o *Managedclient) UnsetProvisionStatus()`

UnsetProvisionStatus ensures that no value is present for ProvisionStatus, not even an explicit nil

