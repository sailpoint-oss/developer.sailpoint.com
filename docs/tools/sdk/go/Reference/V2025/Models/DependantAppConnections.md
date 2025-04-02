---
id: dependant-app-connections
title: DependantAppConnections
pagination_label: DependantAppConnections
sidebar_label: DependantAppConnections
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DependantAppConnections', 'DependantAppConnections'] 
slug: /tools/sdk/go//models/dependant-app-connections
tags: ['SDK', 'Software Development Kit', 'DependantAppConnections', 'DependantAppConnections']
---

# DependantAppConnections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CloudAppId** | Pointer to **string** | Id of the connected Application | [optional] 
**Description** | Pointer to **string** | Description of the connected Application | [optional] 
**Enabled** | Pointer to **bool** | Is the Application enabled | [optional] [default to true]
**ProvisionRequestEnabled** | Pointer to **bool** | Is Provisioning enabled for connected Application | [optional] [default to true]
**AccountSource** | Pointer to [**DependantAppConnectionsAccountSource**](dependant-app-connections-account-source) |  | [optional] 
**LauncherCount** | Pointer to **int64** | The amount of launchers for connected Application (long type) | [optional] 
**MatchAllAccount** | Pointer to **bool** | Is Provisioning enabled for connected Application | [optional] [default to false]
**Owner** | Pointer to [**[]BaseReferenceDto**](base-reference-dto) | The owner of the connected Application | [optional] 
**AppCenterEnabled** | Pointer to **bool** | Is App Center enabled for connected Application | [optional] [default to false]

## Methods

### NewDependantAppConnections

`func NewDependantAppConnections() *DependantAppConnections`

NewDependantAppConnections instantiates a new DependantAppConnections object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDependantAppConnectionsWithDefaults

`func NewDependantAppConnectionsWithDefaults() *DependantAppConnections`

NewDependantAppConnectionsWithDefaults instantiates a new DependantAppConnections object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCloudAppId

`func (o *DependantAppConnections) GetCloudAppId() string`

GetCloudAppId returns the CloudAppId field if non-nil, zero value otherwise.

### GetCloudAppIdOk

`func (o *DependantAppConnections) GetCloudAppIdOk() (*string, bool)`

GetCloudAppIdOk returns a tuple with the CloudAppId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudAppId

`func (o *DependantAppConnections) SetCloudAppId(v string)`

SetCloudAppId sets CloudAppId field to given value.

### HasCloudAppId

`func (o *DependantAppConnections) HasCloudAppId() bool`

HasCloudAppId returns a boolean if a field has been set.

### GetDescription

`func (o *DependantAppConnections) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *DependantAppConnections) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *DependantAppConnections) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *DependantAppConnections) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetEnabled

`func (o *DependantAppConnections) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *DependantAppConnections) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *DependantAppConnections) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *DependantAppConnections) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetProvisionRequestEnabled

`func (o *DependantAppConnections) GetProvisionRequestEnabled() bool`

GetProvisionRequestEnabled returns the ProvisionRequestEnabled field if non-nil, zero value otherwise.

### GetProvisionRequestEnabledOk

`func (o *DependantAppConnections) GetProvisionRequestEnabledOk() (*bool, bool)`

GetProvisionRequestEnabledOk returns a tuple with the ProvisionRequestEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisionRequestEnabled

`func (o *DependantAppConnections) SetProvisionRequestEnabled(v bool)`

SetProvisionRequestEnabled sets ProvisionRequestEnabled field to given value.

### HasProvisionRequestEnabled

`func (o *DependantAppConnections) HasProvisionRequestEnabled() bool`

HasProvisionRequestEnabled returns a boolean if a field has been set.

### GetAccountSource

`func (o *DependantAppConnections) GetAccountSource() DependantAppConnectionsAccountSource`

GetAccountSource returns the AccountSource field if non-nil, zero value otherwise.

### GetAccountSourceOk

`func (o *DependantAppConnections) GetAccountSourceOk() (*DependantAppConnectionsAccountSource, bool)`

GetAccountSourceOk returns a tuple with the AccountSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountSource

`func (o *DependantAppConnections) SetAccountSource(v DependantAppConnectionsAccountSource)`

SetAccountSource sets AccountSource field to given value.

### HasAccountSource

`func (o *DependantAppConnections) HasAccountSource() bool`

HasAccountSource returns a boolean if a field has been set.

### GetLauncherCount

`func (o *DependantAppConnections) GetLauncherCount() int64`

GetLauncherCount returns the LauncherCount field if non-nil, zero value otherwise.

### GetLauncherCountOk

`func (o *DependantAppConnections) GetLauncherCountOk() (*int64, bool)`

GetLauncherCountOk returns a tuple with the LauncherCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLauncherCount

`func (o *DependantAppConnections) SetLauncherCount(v int64)`

SetLauncherCount sets LauncherCount field to given value.

### HasLauncherCount

`func (o *DependantAppConnections) HasLauncherCount() bool`

HasLauncherCount returns a boolean if a field has been set.

### GetMatchAllAccount

`func (o *DependantAppConnections) GetMatchAllAccount() bool`

GetMatchAllAccount returns the MatchAllAccount field if non-nil, zero value otherwise.

### GetMatchAllAccountOk

`func (o *DependantAppConnections) GetMatchAllAccountOk() (*bool, bool)`

GetMatchAllAccountOk returns a tuple with the MatchAllAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchAllAccount

`func (o *DependantAppConnections) SetMatchAllAccount(v bool)`

SetMatchAllAccount sets MatchAllAccount field to given value.

### HasMatchAllAccount

`func (o *DependantAppConnections) HasMatchAllAccount() bool`

HasMatchAllAccount returns a boolean if a field has been set.

### GetOwner

`func (o *DependantAppConnections) GetOwner() []BaseReferenceDto`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *DependantAppConnections) GetOwnerOk() (*[]BaseReferenceDto, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *DependantAppConnections) SetOwner(v []BaseReferenceDto)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *DependantAppConnections) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetAppCenterEnabled

`func (o *DependantAppConnections) GetAppCenterEnabled() bool`

GetAppCenterEnabled returns the AppCenterEnabled field if non-nil, zero value otherwise.

### GetAppCenterEnabledOk

`func (o *DependantAppConnections) GetAppCenterEnabledOk() (*bool, bool)`

GetAppCenterEnabledOk returns a tuple with the AppCenterEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppCenterEnabled

`func (o *DependantAppConnections) SetAppCenterEnabled(v bool)`

SetAppCenterEnabled sets AppCenterEnabled field to given value.

### HasAppCenterEnabled

`func (o *DependantAppConnections) HasAppCenterEnabled() bool`

HasAppCenterEnabled returns a boolean if a field has been set.


