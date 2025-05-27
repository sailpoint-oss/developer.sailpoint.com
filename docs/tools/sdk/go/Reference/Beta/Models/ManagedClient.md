---
id: beta-managed-client
title: ManagedClient
pagination_label: ManagedClient
sidebar_label: ManagedClient
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedClient', 'BetaManagedClient'] 
slug: /tools/sdk/go/beta/models/managed-client
tags: ['SDK', 'Software Development Kit', 'ManagedClient', 'BetaManagedClient']
---

# ManagedClient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ManagedClient ID | [optional] [readonly] 
**AlertKey** | Pointer to **string** | ManagedClient alert key | [optional] [readonly] 
**ApiGatewayBaseUrl** | Pointer to **string** | ManagedClient gateway base url | [optional] [readonly] 
**CcId** | Pointer to **int64** | Previous CC ID to be used in data migration. (This field will be deleted after CC migration!) | [optional] 
**ClientId** | **string** | The client ID used in API management | 
**ClusterId** | **string** | Cluster ID that the ManagedClient is linked to | 
**Cookbook** | Pointer to **string** | VA cookbook | [optional] [readonly] 
**Description** | **string** | ManagedClient description | 
**IpAddress** | Pointer to **string** | The public IP address of the ManagedClient | [optional] [readonly] 
**LastSeen** | Pointer to **SailPointTime** | When the ManagedClient was last seen by the server | [optional] [readonly] 
**Name** | Pointer to **string** | ManagedClient name | [optional] 
**SinceLastSeen** | Pointer to **string** | Milliseconds since the ManagedClient has polled the server | [optional] [readonly] 
**Status** | Pointer to [**ManagedClientStatusEnum**](managed-client-status-enum) | Status of the ManagedClient | [optional] [readonly] 
**Type** | **string** | Type of the ManagedClient (VA, CCG) | 
**VaDownloadUrl** | Pointer to **string** | ManagedClient VA download URL | [optional] [readonly] 
**VaVersion** | Pointer to **string** | Version that the ManagedClient's VA is running | [optional] [readonly] 
**Secret** | Pointer to **string** | Client's apiKey | [optional] 

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

### GetStatus

`func (o *ManagedClient) GetStatus() ManagedClientStatusEnum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ManagedClient) GetStatusOk() (*ManagedClientStatusEnum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ManagedClient) SetStatus(v ManagedClientStatusEnum)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ManagedClient) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

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


