---
id: v1-campaignfilterdetails
title: Campaignfilterdetails
pagination_label: Campaignfilterdetails
sidebar_label: Campaignfilterdetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Campaignfilterdetails', 'V1Campaignfilterdetails'] 
slug: /tools/sdk/go/certificationcampaignfilters/models/campaignfilterdetails
tags: ['SDK', 'Software Development Kit', 'Campaignfilterdetails', 'V1Campaignfilterdetails']
---

# Campaignfilterdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID of the campaign filter | 
**Name** | **string** | Campaign filter name. | 
**Description** | Pointer to **string** | Campaign filter description. | [optional] 
**Owner** | **NullableString** | Owner of the filter. This field automatically populates at creation time with the current user. | 
**Mode** | **string** | Mode/type of filter, either the INCLUSION or EXCLUSION type. The INCLUSION type includes the data in generated campaigns  as per specified in the criteria, whereas the EXCLUSION type excludes the data in generated campaigns as per specified in criteria. | 
**CriteriaList** | Pointer to [**[]CampaignfilterdetailsCriteriaListInner**](campaignfilterdetails-criteria-list-inner) | List of criteria. | [optional] 
**IsSystemFilter** | **bool** | If true, the filter is created by the system. If false, the filter is created by a user. | [default to false]

## Methods

### NewCampaignfilterdetails

`func NewCampaignfilterdetails(id string, name string, owner NullableString, mode string, isSystemFilter bool, ) *Campaignfilterdetails`

NewCampaignfilterdetails instantiates a new Campaignfilterdetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignfilterdetailsWithDefaults

`func NewCampaignfilterdetailsWithDefaults() *Campaignfilterdetails`

NewCampaignfilterdetailsWithDefaults instantiates a new Campaignfilterdetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Campaignfilterdetails) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Campaignfilterdetails) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Campaignfilterdetails) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *Campaignfilterdetails) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Campaignfilterdetails) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Campaignfilterdetails) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Campaignfilterdetails) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Campaignfilterdetails) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Campaignfilterdetails) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Campaignfilterdetails) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetOwner

`func (o *Campaignfilterdetails) GetOwner() string`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Campaignfilterdetails) GetOwnerOk() (*string, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Campaignfilterdetails) SetOwner(v string)`

SetOwner sets Owner field to given value.


### SetOwnerNil

`func (o *Campaignfilterdetails) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *Campaignfilterdetails) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil
### GetMode

`func (o *Campaignfilterdetails) GetMode() string`

GetMode returns the Mode field if non-nil, zero value otherwise.

### GetModeOk

`func (o *Campaignfilterdetails) GetModeOk() (*string, bool)`

GetModeOk returns a tuple with the Mode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMode

`func (o *Campaignfilterdetails) SetMode(v string)`

SetMode sets Mode field to given value.


### GetCriteriaList

`func (o *Campaignfilterdetails) GetCriteriaList() []CampaignfilterdetailsCriteriaListInner`

GetCriteriaList returns the CriteriaList field if non-nil, zero value otherwise.

### GetCriteriaListOk

`func (o *Campaignfilterdetails) GetCriteriaListOk() (*[]CampaignfilterdetailsCriteriaListInner, bool)`

GetCriteriaListOk returns a tuple with the CriteriaList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteriaList

`func (o *Campaignfilterdetails) SetCriteriaList(v []CampaignfilterdetailsCriteriaListInner)`

SetCriteriaList sets CriteriaList field to given value.

### HasCriteriaList

`func (o *Campaignfilterdetails) HasCriteriaList() bool`

HasCriteriaList returns a boolean if a field has been set.

### GetIsSystemFilter

`func (o *Campaignfilterdetails) GetIsSystemFilter() bool`

GetIsSystemFilter returns the IsSystemFilter field if non-nil, zero value otherwise.

### GetIsSystemFilterOk

`func (o *Campaignfilterdetails) GetIsSystemFilterOk() (*bool, bool)`

GetIsSystemFilterOk returns a tuple with the IsSystemFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSystemFilter

`func (o *Campaignfilterdetails) SetIsSystemFilter(v bool)`

SetIsSystemFilter sets IsSystemFilter field to given value.



