---
id: v1-outlierscontributingfeatureaccessitems
title: Outlierscontributingfeatureaccessitems
pagination_label: Outlierscontributingfeatureaccessitems
sidebar_label: Outlierscontributingfeatureaccessitems
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Outlierscontributingfeatureaccessitems', 'V1Outlierscontributingfeatureaccessitems'] 
slug: /tools/sdk/go/iaioutliers/models/outlierscontributingfeatureaccessitems
tags: ['SDK', 'Software Development Kit', 'Outlierscontributingfeatureaccessitems', 'V1Outlierscontributingfeatureaccessitems']
---

# Outlierscontributingfeatureaccessitems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The ID of the access item | [optional] 
**DisplayName** | Pointer to **string** | the display name of the access item | [optional] 
**Description** | Pointer to **NullableString** | Description of the access item. | [optional] 
**AccessType** | Pointer to **string** | The type of the access item. | [optional] 
**SourceName** | Pointer to **string** | the associated source name if it exists | [optional] 
**ExtremelyRare** | Pointer to **bool** | rarest access | [optional] [default to false]

## Methods

### NewOutlierscontributingfeatureaccessitems

`func NewOutlierscontributingfeatureaccessitems() *Outlierscontributingfeatureaccessitems`

NewOutlierscontributingfeatureaccessitems instantiates a new Outlierscontributingfeatureaccessitems object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOutlierscontributingfeatureaccessitemsWithDefaults

`func NewOutlierscontributingfeatureaccessitemsWithDefaults() *Outlierscontributingfeatureaccessitems`

NewOutlierscontributingfeatureaccessitemsWithDefaults instantiates a new Outlierscontributingfeatureaccessitems object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Outlierscontributingfeatureaccessitems) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Outlierscontributingfeatureaccessitems) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Outlierscontributingfeatureaccessitems) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Outlierscontributingfeatureaccessitems) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDisplayName

`func (o *Outlierscontributingfeatureaccessitems) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Outlierscontributingfeatureaccessitems) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Outlierscontributingfeatureaccessitems) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Outlierscontributingfeatureaccessitems) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDescription

`func (o *Outlierscontributingfeatureaccessitems) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Outlierscontributingfeatureaccessitems) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Outlierscontributingfeatureaccessitems) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Outlierscontributingfeatureaccessitems) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Outlierscontributingfeatureaccessitems) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Outlierscontributingfeatureaccessitems) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetAccessType

`func (o *Outlierscontributingfeatureaccessitems) GetAccessType() string`

GetAccessType returns the AccessType field if non-nil, zero value otherwise.

### GetAccessTypeOk

`func (o *Outlierscontributingfeatureaccessitems) GetAccessTypeOk() (*string, bool)`

GetAccessTypeOk returns a tuple with the AccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessType

`func (o *Outlierscontributingfeatureaccessitems) SetAccessType(v string)`

SetAccessType sets AccessType field to given value.

### HasAccessType

`func (o *Outlierscontributingfeatureaccessitems) HasAccessType() bool`

HasAccessType returns a boolean if a field has been set.

### GetSourceName

`func (o *Outlierscontributingfeatureaccessitems) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *Outlierscontributingfeatureaccessitems) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *Outlierscontributingfeatureaccessitems) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *Outlierscontributingfeatureaccessitems) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetExtremelyRare

`func (o *Outlierscontributingfeatureaccessitems) GetExtremelyRare() bool`

GetExtremelyRare returns the ExtremelyRare field if non-nil, zero value otherwise.

### GetExtremelyRareOk

`func (o *Outlierscontributingfeatureaccessitems) GetExtremelyRareOk() (*bool, bool)`

GetExtremelyRareOk returns a tuple with the ExtremelyRare field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtremelyRare

`func (o *Outlierscontributingfeatureaccessitems) SetExtremelyRare(v bool)`

SetExtremelyRare sets ExtremelyRare field to given value.

### HasExtremelyRare

`func (o *Outlierscontributingfeatureaccessitems) HasExtremelyRare() bool`

HasExtremelyRare returns a boolean if a field has been set.


