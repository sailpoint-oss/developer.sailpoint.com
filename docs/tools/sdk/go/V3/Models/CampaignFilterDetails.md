---
id: campaign-filter-details
title: CampaignFilterDetails
pagination_label: CampaignFilterDetails
sidebar_label: CampaignFilterDetails
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'CampaignFilterDetails'] 
slug: /tools/sdk/go/v3/models/campaign-filter-details
tags: ['SDK', 'Software Development Kit', 'CampaignFilterDetails']
---

# CampaignFilterDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | Id of the campaign filter | [optional] 
**Name** |  **string** | This is campaign filter&#39;s name. | 
**Description** |  **string** | This is campaign filter&#39;s description. | 
**Owner** |  **NullableString** | The owner of this filter. This field is automatically populated at creation time with the current user. | 
**Mode** |  **map[string]interface{}** | The mode/type of Filter, where it is of INCLUSION or EXCLUSION type. INCLUSION type will include the data in generated campaign  as per specified in criteria, whereas EXCLUSION type will exclude the the data in generated campaign as per specified in criteria. | 
**CriteriaList** |  Pointer to [**[]CampaignFilterDetailsCriteriaListInner**](campaign-filter-details-criteria-list-inner) | List of criteria. | [optional] 

## Methods

### NewCampaignFilterDetails

`func NewCampaignFilterDetails(name string, description string, owner NullableString, mode map[string]interface{}, ) *CampaignFilterDetails`

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

### HasId

`func (o *CampaignFilterDetails) HasId() bool`

HasId returns a boolean if a field has been set.

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


[[Back to top]](#) 


