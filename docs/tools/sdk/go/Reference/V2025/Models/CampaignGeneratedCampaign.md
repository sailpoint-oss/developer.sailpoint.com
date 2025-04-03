---
id: v2025-campaign-generated-campaign
title: CampaignGeneratedCampaign
pagination_label: CampaignGeneratedCampaign
sidebar_label: CampaignGeneratedCampaign
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CampaignGeneratedCampaign', 'V2025CampaignGeneratedCampaign'] 
slug: /tools/sdk/go/v2025/models/campaign-generated-campaign
tags: ['SDK', 'Software Development Kit', 'CampaignGeneratedCampaign', 'V2025CampaignGeneratedCampaign']
---

# CampaignGeneratedCampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID of the campaign. | 
**Name** | **string** | Human friendly name of the campaign. | 
**Description** | **string** | Extended description of the campaign. | 
**Created** | **SailPointTime** | The date and time the campaign was created. | 
**Modified** | Pointer to **NullableString** | The date and time the campaign was last modified. | [optional] 
**Deadline** | Pointer to **NullableString** | The date and time when the campaign must be finished by. | [optional] 
**Type** | **map[string]interface{}** | The type of campaign that was generated. | 
**CampaignOwner** | [**CampaignGeneratedCampaignCampaignOwner**](campaign-generated-campaign-campaign-owner) |  | 
**Status** | **map[string]interface{}** | The current status of the campaign. | 

## Methods

### NewCampaignGeneratedCampaign

`func NewCampaignGeneratedCampaign(id string, name string, description string, created SailPointTime, type_ map[string]interface{}, campaignOwner CampaignGeneratedCampaignCampaignOwner, status map[string]interface{}, ) *CampaignGeneratedCampaign`

NewCampaignGeneratedCampaign instantiates a new CampaignGeneratedCampaign object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignGeneratedCampaignWithDefaults

`func NewCampaignGeneratedCampaignWithDefaults() *CampaignGeneratedCampaign`

NewCampaignGeneratedCampaignWithDefaults instantiates a new CampaignGeneratedCampaign object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CampaignGeneratedCampaign) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CampaignGeneratedCampaign) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CampaignGeneratedCampaign) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *CampaignGeneratedCampaign) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CampaignGeneratedCampaign) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CampaignGeneratedCampaign) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *CampaignGeneratedCampaign) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CampaignGeneratedCampaign) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CampaignGeneratedCampaign) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetCreated

`func (o *CampaignGeneratedCampaign) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CampaignGeneratedCampaign) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CampaignGeneratedCampaign) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *CampaignGeneratedCampaign) GetModified() string`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *CampaignGeneratedCampaign) GetModifiedOk() (*string, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *CampaignGeneratedCampaign) SetModified(v string)`

SetModified sets Modified field to given value.

### HasModified

`func (o *CampaignGeneratedCampaign) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *CampaignGeneratedCampaign) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *CampaignGeneratedCampaign) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetDeadline

`func (o *CampaignGeneratedCampaign) GetDeadline() string`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *CampaignGeneratedCampaign) GetDeadlineOk() (*string, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *CampaignGeneratedCampaign) SetDeadline(v string)`

SetDeadline sets Deadline field to given value.

### HasDeadline

`func (o *CampaignGeneratedCampaign) HasDeadline() bool`

HasDeadline returns a boolean if a field has been set.

### SetDeadlineNil

`func (o *CampaignGeneratedCampaign) SetDeadlineNil(b bool)`

 SetDeadlineNil sets the value for Deadline to be an explicit nil

### UnsetDeadline
`func (o *CampaignGeneratedCampaign) UnsetDeadline()`

UnsetDeadline ensures that no value is present for Deadline, not even an explicit nil
### GetType

`func (o *CampaignGeneratedCampaign) GetType() map[string]interface{}`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CampaignGeneratedCampaign) GetTypeOk() (*map[string]interface{}, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CampaignGeneratedCampaign) SetType(v map[string]interface{})`

SetType sets Type field to given value.


### GetCampaignOwner

`func (o *CampaignGeneratedCampaign) GetCampaignOwner() CampaignGeneratedCampaignCampaignOwner`

GetCampaignOwner returns the CampaignOwner field if non-nil, zero value otherwise.

### GetCampaignOwnerOk

`func (o *CampaignGeneratedCampaign) GetCampaignOwnerOk() (*CampaignGeneratedCampaignCampaignOwner, bool)`

GetCampaignOwnerOk returns a tuple with the CampaignOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaignOwner

`func (o *CampaignGeneratedCampaign) SetCampaignOwner(v CampaignGeneratedCampaignCampaignOwner)`

SetCampaignOwner sets CampaignOwner field to given value.


### GetStatus

`func (o *CampaignGeneratedCampaign) GetStatus() map[string]interface{}`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CampaignGeneratedCampaign) GetStatusOk() (*map[string]interface{}, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CampaignGeneratedCampaign) SetStatus(v map[string]interface{})`

SetStatus sets Status field to given value.



