---
id: v1-accessitemaccessprofileresponse
title: Accessitemaccessprofileresponse
pagination_label: Accessitemaccessprofileresponse
sidebar_label: Accessitemaccessprofileresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessitemaccessprofileresponse', 'V1Accessitemaccessprofileresponse'] 
slug: /tools/sdk/go/identityhistory/models/accessitemaccessprofileresponse
tags: ['SDK', 'Software Development Kit', 'Accessitemaccessprofileresponse', 'V1Accessitemaccessprofileresponse']
---

# Accessitemaccessprofileresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the access item id | [optional] 
**AccessType** | Pointer to **string** | the access item type. accessProfile in this case | [optional] 
**DisplayName** | Pointer to **string** | the display name of the identity | [optional] 
**SourceName** | Pointer to **string** | the name of the source | [optional] 
**EntitlementCount** | **int32** | the number of entitlements the access profile will create | 
**Description** | Pointer to **NullableString** | the description for the access profile | [optional] 
**SourceId** | Pointer to **string** | the id of the source | [optional] 
**AppRefs** | [**[]AccessitemaccessprofileresponseAppRefsInner**](accessitemaccessprofileresponse-app-refs-inner) | the list of app ids associated with the access profile | 
**StartDate** | Pointer to **NullableString** | the date the access profile will be assigned to the specified identity, in case requested with a future start date | [optional] 
**RemoveDate** | Pointer to **NullableString** | the date the access profile is no longer assigned to the specified identity | [optional] 
**Standalone** | **NullableBool** | indicates whether the access profile is standalone | 
**Revocable** | **NullableBool** | indicates whether the access profile is revocable | 

## Methods

### NewAccessitemaccessprofileresponse

`func NewAccessitemaccessprofileresponse(entitlementCount int32, appRefs []AccessitemaccessprofileresponseAppRefsInner, standalone NullableBool, revocable NullableBool, ) *Accessitemaccessprofileresponse`

NewAccessitemaccessprofileresponse instantiates a new Accessitemaccessprofileresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessitemaccessprofileresponseWithDefaults

`func NewAccessitemaccessprofileresponseWithDefaults() *Accessitemaccessprofileresponse`

NewAccessitemaccessprofileresponseWithDefaults instantiates a new Accessitemaccessprofileresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Accessitemaccessprofileresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accessitemaccessprofileresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accessitemaccessprofileresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Accessitemaccessprofileresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAccessType

`func (o *Accessitemaccessprofileresponse) GetAccessType() string`

GetAccessType returns the AccessType field if non-nil, zero value otherwise.

### GetAccessTypeOk

`func (o *Accessitemaccessprofileresponse) GetAccessTypeOk() (*string, bool)`

GetAccessTypeOk returns a tuple with the AccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessType

`func (o *Accessitemaccessprofileresponse) SetAccessType(v string)`

SetAccessType sets AccessType field to given value.

### HasAccessType

`func (o *Accessitemaccessprofileresponse) HasAccessType() bool`

HasAccessType returns a boolean if a field has been set.

### GetDisplayName

`func (o *Accessitemaccessprofileresponse) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Accessitemaccessprofileresponse) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Accessitemaccessprofileresponse) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Accessitemaccessprofileresponse) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetSourceName

`func (o *Accessitemaccessprofileresponse) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *Accessitemaccessprofileresponse) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *Accessitemaccessprofileresponse) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *Accessitemaccessprofileresponse) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetEntitlementCount

`func (o *Accessitemaccessprofileresponse) GetEntitlementCount() int32`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *Accessitemaccessprofileresponse) GetEntitlementCountOk() (*int32, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *Accessitemaccessprofileresponse) SetEntitlementCount(v int32)`

SetEntitlementCount sets EntitlementCount field to given value.


### GetDescription

`func (o *Accessitemaccessprofileresponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Accessitemaccessprofileresponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Accessitemaccessprofileresponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Accessitemaccessprofileresponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Accessitemaccessprofileresponse) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Accessitemaccessprofileresponse) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetSourceId

`func (o *Accessitemaccessprofileresponse) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Accessitemaccessprofileresponse) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Accessitemaccessprofileresponse) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Accessitemaccessprofileresponse) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetAppRefs

`func (o *Accessitemaccessprofileresponse) GetAppRefs() []AccessitemaccessprofileresponseAppRefsInner`

GetAppRefs returns the AppRefs field if non-nil, zero value otherwise.

### GetAppRefsOk

`func (o *Accessitemaccessprofileresponse) GetAppRefsOk() (*[]AccessitemaccessprofileresponseAppRefsInner, bool)`

GetAppRefsOk returns a tuple with the AppRefs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppRefs

`func (o *Accessitemaccessprofileresponse) SetAppRefs(v []AccessitemaccessprofileresponseAppRefsInner)`

SetAppRefs sets AppRefs field to given value.


### GetStartDate

`func (o *Accessitemaccessprofileresponse) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *Accessitemaccessprofileresponse) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *Accessitemaccessprofileresponse) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *Accessitemaccessprofileresponse) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### SetStartDateNil

`func (o *Accessitemaccessprofileresponse) SetStartDateNil(b bool)`

 SetStartDateNil sets the value for StartDate to be an explicit nil

### UnsetStartDate
`func (o *Accessitemaccessprofileresponse) UnsetStartDate()`

UnsetStartDate ensures that no value is present for StartDate, not even an explicit nil
### GetRemoveDate

`func (o *Accessitemaccessprofileresponse) GetRemoveDate() string`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *Accessitemaccessprofileresponse) GetRemoveDateOk() (*string, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *Accessitemaccessprofileresponse) SetRemoveDate(v string)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *Accessitemaccessprofileresponse) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### SetRemoveDateNil

`func (o *Accessitemaccessprofileresponse) SetRemoveDateNil(b bool)`

 SetRemoveDateNil sets the value for RemoveDate to be an explicit nil

### UnsetRemoveDate
`func (o *Accessitemaccessprofileresponse) UnsetRemoveDate()`

UnsetRemoveDate ensures that no value is present for RemoveDate, not even an explicit nil
### GetStandalone

`func (o *Accessitemaccessprofileresponse) GetStandalone() bool`

GetStandalone returns the Standalone field if non-nil, zero value otherwise.

### GetStandaloneOk

`func (o *Accessitemaccessprofileresponse) GetStandaloneOk() (*bool, bool)`

GetStandaloneOk returns a tuple with the Standalone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandalone

`func (o *Accessitemaccessprofileresponse) SetStandalone(v bool)`

SetStandalone sets Standalone field to given value.


### SetStandaloneNil

`func (o *Accessitemaccessprofileresponse) SetStandaloneNil(b bool)`

 SetStandaloneNil sets the value for Standalone to be an explicit nil

### UnsetStandalone
`func (o *Accessitemaccessprofileresponse) UnsetStandalone()`

UnsetStandalone ensures that no value is present for Standalone, not even an explicit nil
### GetRevocable

`func (o *Accessitemaccessprofileresponse) GetRevocable() bool`

GetRevocable returns the Revocable field if non-nil, zero value otherwise.

### GetRevocableOk

`func (o *Accessitemaccessprofileresponse) GetRevocableOk() (*bool, bool)`

GetRevocableOk returns a tuple with the Revocable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocable

`func (o *Accessitemaccessprofileresponse) SetRevocable(v bool)`

SetRevocable sets Revocable field to given value.


### SetRevocableNil

`func (o *Accessitemaccessprofileresponse) SetRevocableNil(b bool)`

 SetRevocableNil sets the value for Revocable to be an explicit nil

### UnsetRevocable
`func (o *Accessitemaccessprofileresponse) UnsetRevocable()`

UnsetRevocable ensures that no value is present for Revocable, not even an explicit nil

