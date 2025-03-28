---
id: campaign-filter-details
title: CampaignFilterDetails
pagination_label: CampaignFilterDetails
sidebar_label: CampaignFilterDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CampaignFilterDetails', 'CampaignFilterDetails'] 
slug: /tools/sdk/go/v3/models/campaign-filter-details
tags: ['SDK', 'Software Development Kit', 'CampaignFilterDetails', 'CampaignFilterDetails']
---

# CampaignFilterDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID of the campaign filter | 
**Name** | **string** | Campaign filter name. | 
**Description** | Pointer to **string** | Campaign filter description. | [optional] 
**Owner** | **NullableString** | Owner of the filter. This field automatically populates at creation time with the current user. | 
**Mode** | **map[string]interface{}** | Mode/type of filter, either the INCLUSION or EXCLUSION type. The INCLUSION type includes the data in generated campaigns  as per specified in the criteria, whereas the EXCLUSION type excludes the data in generated campaigns as per specified in criteria. | 
**CriteriaList** | Pointer to [**[]CampaignFilterDetailsCriteriaListInner**](campaign-filter-details-criteria-list-inner) | List of criteria. | [optional] 
**IsSystemFilter** | **bool** | If true, the filter is created by the system. If false, the filter is created by a user. | [default to false]

## Methods

### NewCampaignFilterDetails

`func NewCampaignFilterDetails(id string, name string, owner NullableString, mode map[string]interface{}, isSystemFilter bool, ) *CampaignFilterDetails`

NewCampaignFilterDetails instantiates a new CampaignFilterDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignFilterDetailsWithDefaults

`func NewCampaignFilterDetailsWithDefaults() *CampaignFilterDetails`

NewCampaignFilterDetailsWithDefaults instantiates a new CampaignFilterDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CampaignFilterDetails) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CampaignFilterDetails) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CampaignFilterDetails) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *CampaignFilterDetails) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CampaignFilterDetails) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CampaignFilterDetails) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *CampaignFilterDetails) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CampaignFilterDetails) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CampaignFilterDetails) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CampaignFilterDetails) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetOwner

`func (o *CampaignFilterDetails) GetOwner() string`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *CampaignFilterDetails) GetOwnerOk() (*string, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *CampaignFilterDetails) SetOwner(v string)`

SetOwner sets Owner field to given value.


### SetOwnerNil

`func (o *CampaignFilterDetails) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *CampaignFilterDetails) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil
### GetMode

`func (o *CampaignFilterDetails) GetMode() map[string]interface{}`

GetMode returns the Mode field if non-nil, zero value otherwise.

### GetModeOk

`func (o *CampaignFilterDetails) GetModeOk() (*map[string]interface{}, bool)`

GetModeOk returns a tuple with the Mode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMode

`func (o *CampaignFilterDetails) SetMode(v map[string]interface{})`

SetMode sets Mode field to given value.


### GetCriteriaList

`func (o *CampaignFilterDetails) GetCriteriaList() []CampaignFilterDetailsCriteriaListInner`

GetCriteriaList returns the CriteriaList field if non-nil, zero value otherwise.

### GetCriteriaListOk

`func (o *CampaignFilterDetails) GetCriteriaListOk() (*[]CampaignFilterDetailsCriteriaListInner, bool)`

GetCriteriaListOk returns a tuple with the CriteriaList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteriaList

`func (o *CampaignFilterDetails) SetCriteriaList(v []CampaignFilterDetailsCriteriaListInner)`

SetCriteriaList sets CriteriaList field to given value.

### HasCriteriaList

`func (o *CampaignFilterDetails) HasCriteriaList() bool`

HasCriteriaList returns a boolean if a field has been set.

### GetIsSystemFilter

`func (o *CampaignFilterDetails) GetIsSystemFilter() bool`

GetIsSystemFilter returns the IsSystemFilter field if non-nil, zero value otherwise.

### GetIsSystemFilterOk

`func (o *CampaignFilterDetails) GetIsSystemFilterOk() (*bool, bool)`

GetIsSystemFilterOk returns a tuple with the IsSystemFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSystemFilter

`func (o *CampaignFilterDetails) SetIsSystemFilter(v bool)`

SetIsSystemFilter sets IsSystemFilter field to given value.



