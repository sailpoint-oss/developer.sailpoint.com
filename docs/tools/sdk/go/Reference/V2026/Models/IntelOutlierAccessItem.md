---
id: v2026-intel-outlier-access-item
title: IntelOutlierAccessItem
pagination_label: IntelOutlierAccessItem
sidebar_label: IntelOutlierAccessItem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IntelOutlierAccessItem', 'V2026IntelOutlierAccessItem'] 
slug: /tools/sdk/go/v2026/models/intel-outlier-access-item
tags: ['SDK', 'Software Development Kit', 'IntelOutlierAccessItem', 'V2026IntelOutlierAccessItem']
---

# IntelOutlierAccessItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Stable identifier of the outlier access-item row. | 
**DisplayName** | **string** | Display label of the risky access item. | 
**Description** | Pointer to **NullableString** | Optional descriptive text for the risky access item. | [optional] 
**AccessType** | **string** | Access item type (for example ENTITLEMENT, ROLE, ACCESS_PROFILE, ACCOUNT, or APP). | 
**SourceName** | **string** | Source name where the risky access item exists. | 
**ExtremelyRare** | **bool** | Indicates whether analytics marked this item as extremely rare. | 

## Methods

### NewIntelOutlierAccessItem

`func NewIntelOutlierAccessItem(id string, displayName string, accessType string, sourceName string, extremelyRare bool, ) *IntelOutlierAccessItem`

NewIntelOutlierAccessItem instantiates a new IntelOutlierAccessItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelOutlierAccessItemWithDefaults

`func NewIntelOutlierAccessItemWithDefaults() *IntelOutlierAccessItem`

NewIntelOutlierAccessItemWithDefaults instantiates a new IntelOutlierAccessItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IntelOutlierAccessItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IntelOutlierAccessItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IntelOutlierAccessItem) SetId(v string)`

SetId sets Id field to given value.


### GetDisplayName

`func (o *IntelOutlierAccessItem) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *IntelOutlierAccessItem) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *IntelOutlierAccessItem) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetDescription

`func (o *IntelOutlierAccessItem) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *IntelOutlierAccessItem) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *IntelOutlierAccessItem) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *IntelOutlierAccessItem) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *IntelOutlierAccessItem) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *IntelOutlierAccessItem) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetAccessType

`func (o *IntelOutlierAccessItem) GetAccessType() string`

GetAccessType returns the AccessType field if non-nil, zero value otherwise.

### GetAccessTypeOk

`func (o *IntelOutlierAccessItem) GetAccessTypeOk() (*string, bool)`

GetAccessTypeOk returns a tuple with the AccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessType

`func (o *IntelOutlierAccessItem) SetAccessType(v string)`

SetAccessType sets AccessType field to given value.


### GetSourceName

`func (o *IntelOutlierAccessItem) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *IntelOutlierAccessItem) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *IntelOutlierAccessItem) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.


### GetExtremelyRare

`func (o *IntelOutlierAccessItem) GetExtremelyRare() bool`

GetExtremelyRare returns the ExtremelyRare field if non-nil, zero value otherwise.

### GetExtremelyRareOk

`func (o *IntelOutlierAccessItem) GetExtremelyRareOk() (*bool, bool)`

GetExtremelyRareOk returns a tuple with the ExtremelyRare field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtremelyRare

`func (o *IntelOutlierAccessItem) SetExtremelyRare(v bool)`

SetExtremelyRare sets ExtremelyRare field to given value.



