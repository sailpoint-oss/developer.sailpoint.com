---
id: v2025-outliers-contributing-feature-access-items
title: OutliersContributingFeatureAccessItems
pagination_label: OutliersContributingFeatureAccessItems
sidebar_label: OutliersContributingFeatureAccessItems
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'OutliersContributingFeatureAccessItems', 'V2025OutliersContributingFeatureAccessItems'] 
slug: /tools/sdk/go/v2025/models/outliers-contributing-feature-access-items
tags: ['SDK', 'Software Development Kit', 'OutliersContributingFeatureAccessItems', 'V2025OutliersContributingFeatureAccessItems']
---

# OutliersContributingFeatureAccessItems

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

### NewOutliersContributingFeatureAccessItems

`func NewOutliersContributingFeatureAccessItems() *OutliersContributingFeatureAccessItems`

NewOutliersContributingFeatureAccessItems instantiates a new OutliersContributingFeatureAccessItems object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOutliersContributingFeatureAccessItemsWithDefaults

`func NewOutliersContributingFeatureAccessItemsWithDefaults() *OutliersContributingFeatureAccessItems`

NewOutliersContributingFeatureAccessItemsWithDefaults instantiates a new OutliersContributingFeatureAccessItems object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *OutliersContributingFeatureAccessItems) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *OutliersContributingFeatureAccessItems) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *OutliersContributingFeatureAccessItems) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *OutliersContributingFeatureAccessItems) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDisplayName

`func (o *OutliersContributingFeatureAccessItems) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *OutliersContributingFeatureAccessItems) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *OutliersContributingFeatureAccessItems) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *OutliersContributingFeatureAccessItems) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDescription

`func (o *OutliersContributingFeatureAccessItems) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *OutliersContributingFeatureAccessItems) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *OutliersContributingFeatureAccessItems) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *OutliersContributingFeatureAccessItems) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *OutliersContributingFeatureAccessItems) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *OutliersContributingFeatureAccessItems) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetAccessType

`func (o *OutliersContributingFeatureAccessItems) GetAccessType() string`

GetAccessType returns the AccessType field if non-nil, zero value otherwise.

### GetAccessTypeOk

`func (o *OutliersContributingFeatureAccessItems) GetAccessTypeOk() (*string, bool)`

GetAccessTypeOk returns a tuple with the AccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessType

`func (o *OutliersContributingFeatureAccessItems) SetAccessType(v string)`

SetAccessType sets AccessType field to given value.

### HasAccessType

`func (o *OutliersContributingFeatureAccessItems) HasAccessType() bool`

HasAccessType returns a boolean if a field has been set.

### GetSourceName

`func (o *OutliersContributingFeatureAccessItems) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *OutliersContributingFeatureAccessItems) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *OutliersContributingFeatureAccessItems) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *OutliersContributingFeatureAccessItems) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetExtremelyRare

`func (o *OutliersContributingFeatureAccessItems) GetExtremelyRare() bool`

GetExtremelyRare returns the ExtremelyRare field if non-nil, zero value otherwise.

### GetExtremelyRareOk

`func (o *OutliersContributingFeatureAccessItems) GetExtremelyRareOk() (*bool, bool)`

GetExtremelyRareOk returns a tuple with the ExtremelyRare field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtremelyRare

`func (o *OutliersContributingFeatureAccessItems) SetExtremelyRare(v bool)`

SetExtremelyRare sets ExtremelyRare field to given value.

### HasExtremelyRare

`func (o *OutliersContributingFeatureAccessItems) HasExtremelyRare() bool`

HasExtremelyRare returns a boolean if a field has been set.


