---
id: v1-dependantappconnections
title: Dependantappconnections
pagination_label: Dependantappconnections
sidebar_label: Dependantappconnections
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Dependantappconnections', 'V1Dependantappconnections'] 
slug: /tools/sdk/go/sources/models/dependantappconnections
tags: ['SDK', 'Software Development Kit', 'Dependantappconnections', 'V1Dependantappconnections']
---

# Dependantappconnections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CloudAppId** | Pointer to **string** | Id of the connected Application | [optional] 
**Description** | Pointer to **string** | Description of the connected Application | [optional] 
**Enabled** | Pointer to **bool** | Is the Application enabled | [optional] [default to true]
**ProvisionRequestEnabled** | Pointer to **bool** | Is Provisioning enabled for connected Application | [optional] [default to true]
**AccountSource** | Pointer to [**DependantappconnectionsAccountSource**](dependantappconnections-account-source) |  | [optional] 
**LauncherCount** | Pointer to **int64** | The amount of launchers for connected Application (long type) | [optional] 
**MatchAllAccount** | Pointer to **bool** | Is Provisioning enabled for connected Application | [optional] [default to false]
**Owner** | Pointer to [**[]Basereferencedto**](basereferencedto) | The owner of the connected Application | [optional] 
**AppCenterEnabled** | Pointer to **bool** | Is App Center enabled for connected Application | [optional] [default to false]

## Methods

### NewDependantappconnections

`func NewDependantappconnections() *Dependantappconnections`

NewDependantappconnections instantiates a new Dependantappconnections object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDependantappconnectionsWithDefaults

`func NewDependantappconnectionsWithDefaults() *Dependantappconnections`

NewDependantappconnectionsWithDefaults instantiates a new Dependantappconnections object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCloudAppId

`func (o *Dependantappconnections) GetCloudAppId() string`

GetCloudAppId returns the CloudAppId field if non-nil, zero value otherwise.

### GetCloudAppIdOk

`func (o *Dependantappconnections) GetCloudAppIdOk() (*string, bool)`

GetCloudAppIdOk returns a tuple with the CloudAppId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudAppId

`func (o *Dependantappconnections) SetCloudAppId(v string)`

SetCloudAppId sets CloudAppId field to given value.

### HasCloudAppId

`func (o *Dependantappconnections) HasCloudAppId() bool`

HasCloudAppId returns a boolean if a field has been set.

### GetDescription

`func (o *Dependantappconnections) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Dependantappconnections) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Dependantappconnections) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Dependantappconnections) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetEnabled

`func (o *Dependantappconnections) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Dependantappconnections) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Dependantappconnections) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Dependantappconnections) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetProvisionRequestEnabled

`func (o *Dependantappconnections) GetProvisionRequestEnabled() bool`

GetProvisionRequestEnabled returns the ProvisionRequestEnabled field if non-nil, zero value otherwise.

### GetProvisionRequestEnabledOk

`func (o *Dependantappconnections) GetProvisionRequestEnabledOk() (*bool, bool)`

GetProvisionRequestEnabledOk returns a tuple with the ProvisionRequestEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisionRequestEnabled

`func (o *Dependantappconnections) SetProvisionRequestEnabled(v bool)`

SetProvisionRequestEnabled sets ProvisionRequestEnabled field to given value.

### HasProvisionRequestEnabled

`func (o *Dependantappconnections) HasProvisionRequestEnabled() bool`

HasProvisionRequestEnabled returns a boolean if a field has been set.

### GetAccountSource

`func (o *Dependantappconnections) GetAccountSource() DependantappconnectionsAccountSource`

GetAccountSource returns the AccountSource field if non-nil, zero value otherwise.

### GetAccountSourceOk

`func (o *Dependantappconnections) GetAccountSourceOk() (*DependantappconnectionsAccountSource, bool)`

GetAccountSourceOk returns a tuple with the AccountSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountSource

`func (o *Dependantappconnections) SetAccountSource(v DependantappconnectionsAccountSource)`

SetAccountSource sets AccountSource field to given value.

### HasAccountSource

`func (o *Dependantappconnections) HasAccountSource() bool`

HasAccountSource returns a boolean if a field has been set.

### GetLauncherCount

`func (o *Dependantappconnections) GetLauncherCount() int64`

GetLauncherCount returns the LauncherCount field if non-nil, zero value otherwise.

### GetLauncherCountOk

`func (o *Dependantappconnections) GetLauncherCountOk() (*int64, bool)`

GetLauncherCountOk returns a tuple with the LauncherCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLauncherCount

`func (o *Dependantappconnections) SetLauncherCount(v int64)`

SetLauncherCount sets LauncherCount field to given value.

### HasLauncherCount

`func (o *Dependantappconnections) HasLauncherCount() bool`

HasLauncherCount returns a boolean if a field has been set.

### GetMatchAllAccount

`func (o *Dependantappconnections) GetMatchAllAccount() bool`

GetMatchAllAccount returns the MatchAllAccount field if non-nil, zero value otherwise.

### GetMatchAllAccountOk

`func (o *Dependantappconnections) GetMatchAllAccountOk() (*bool, bool)`

GetMatchAllAccountOk returns a tuple with the MatchAllAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchAllAccount

`func (o *Dependantappconnections) SetMatchAllAccount(v bool)`

SetMatchAllAccount sets MatchAllAccount field to given value.

### HasMatchAllAccount

`func (o *Dependantappconnections) HasMatchAllAccount() bool`

HasMatchAllAccount returns a boolean if a field has been set.

### GetOwner

`func (o *Dependantappconnections) GetOwner() []Basereferencedto`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Dependantappconnections) GetOwnerOk() (*[]Basereferencedto, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Dependantappconnections) SetOwner(v []Basereferencedto)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Dependantappconnections) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetAppCenterEnabled

`func (o *Dependantappconnections) GetAppCenterEnabled() bool`

GetAppCenterEnabled returns the AppCenterEnabled field if non-nil, zero value otherwise.

### GetAppCenterEnabledOk

`func (o *Dependantappconnections) GetAppCenterEnabledOk() (*bool, bool)`

GetAppCenterEnabledOk returns a tuple with the AppCenterEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppCenterEnabled

`func (o *Dependantappconnections) SetAppCenterEnabled(v bool)`

SetAppCenterEnabled sets AppCenterEnabled field to given value.

### HasAppCenterEnabled

`func (o *Dependantappconnections) HasAppCenterEnabled() bool`

HasAppCenterEnabled returns a boolean if a field has been set.


