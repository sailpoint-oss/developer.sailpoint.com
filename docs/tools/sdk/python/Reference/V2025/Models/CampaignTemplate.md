---
id: v2025-campaign-template
title: CampaignTemplate
pagination_label: CampaignTemplate
sidebar_label: CampaignTemplate
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CampaignTemplate', 'V2025CampaignTemplate'] 
slug: /tools/sdk/go/v2025/models/campaign-template
tags: ['SDK', 'Software Development Kit', 'CampaignTemplate', 'V2025CampaignTemplate']
---

# CampaignTemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Id of the campaign template | [optional] 
**Name** | **string** | This template's name. Has no bearing on generated campaigns' names. | 
**Description** | **string** | This template's description. Has no bearing on generated campaigns' descriptions. | 
**Created** | **SailPointTime** | Creation date of Campaign Template | [readonly] 
**Modified** | **NullableTime** | Modification date of Campaign Template | [readonly] 
**Scheduled** | Pointer to **bool** | Indicates if this campaign template has been scheduled. | [optional] [readonly] [default to false]
**OwnerRef** | Pointer to [**CampaignTemplateOwnerRef**](campaign-template-owner-ref) |  | [optional] 
**DeadlineDuration** | Pointer to **NullableString** | The time period during which the campaign should be completed, formatted as an ISO-8601 Duration. When this template generates a campaign, the campaign's deadline will be the current date plus this duration. For example, if generation occurred on 2020-01-01 and this field was \"P2W\" (two weeks), the resulting campaign's deadline would be 2020-01-15 (the current date plus 14 days). | [optional] 
**Campaign** | [**Campaign**](campaign) |  | 

## Methods

### NewCampaignTemplate

`func NewCampaignTemplate(name string, description string, created SailPointTime, modified NullableTime, campaign Campaign, ) *CampaignTemplate`

NewCampaignTemplate instantiates a new CampaignTemplate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignTemplateWithDefaults

`func NewCampaignTemplateWithDefaults() *CampaignTemplate`

NewCampaignTemplateWithDefaults instantiates a new CampaignTemplate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CampaignTemplate) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CampaignTemplate) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CampaignTemplate) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CampaignTemplate) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *CampaignTemplate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CampaignTemplate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CampaignTemplate) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *CampaignTemplate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CampaignTemplate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CampaignTemplate) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetCreated

`func (o *CampaignTemplate) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CampaignTemplate) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CampaignTemplate) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *CampaignTemplate) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *CampaignTemplate) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *CampaignTemplate) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.


### SetModifiedNil

`func (o *CampaignTemplate) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *CampaignTemplate) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetScheduled

`func (o *CampaignTemplate) GetScheduled() bool`

GetScheduled returns the Scheduled field if non-nil, zero value otherwise.

### GetScheduledOk

`func (o *CampaignTemplate) GetScheduledOk() (*bool, bool)`

GetScheduledOk returns a tuple with the Scheduled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduled

`func (o *CampaignTemplate) SetScheduled(v bool)`

SetScheduled sets Scheduled field to given value.

### HasScheduled

`func (o *CampaignTemplate) HasScheduled() bool`

HasScheduled returns a boolean if a field has been set.

### GetOwnerRef

`func (o *CampaignTemplate) GetOwnerRef() CampaignTemplateOwnerRef`

GetOwnerRef returns the OwnerRef field if non-nil, zero value otherwise.

### GetOwnerRefOk

`func (o *CampaignTemplate) GetOwnerRefOk() (*CampaignTemplateOwnerRef, bool)`

GetOwnerRefOk returns a tuple with the OwnerRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerRef

`func (o *CampaignTemplate) SetOwnerRef(v CampaignTemplateOwnerRef)`

SetOwnerRef sets OwnerRef field to given value.

### HasOwnerRef

`func (o *CampaignTemplate) HasOwnerRef() bool`

HasOwnerRef returns a boolean if a field has been set.

### GetDeadlineDuration

`func (o *CampaignTemplate) GetDeadlineDuration() string`

GetDeadlineDuration returns the DeadlineDuration field if non-nil, zero value otherwise.

### GetDeadlineDurationOk

`func (o *CampaignTemplate) GetDeadlineDurationOk() (*string, bool)`

GetDeadlineDurationOk returns a tuple with the DeadlineDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadlineDuration

`func (o *CampaignTemplate) SetDeadlineDuration(v string)`

SetDeadlineDuration sets DeadlineDuration field to given value.

### HasDeadlineDuration

`func (o *CampaignTemplate) HasDeadlineDuration() bool`

HasDeadlineDuration returns a boolean if a field has been set.

### SetDeadlineDurationNil

`func (o *CampaignTemplate) SetDeadlineDurationNil(b bool)`

 SetDeadlineDurationNil sets the value for DeadlineDuration to be an explicit nil

### UnsetDeadlineDuration
`func (o *CampaignTemplate) UnsetDeadlineDuration()`

UnsetDeadlineDuration ensures that no value is present for DeadlineDuration, not even an explicit nil
### GetCampaign

`func (o *CampaignTemplate) GetCampaign() Campaign`

GetCampaign returns the Campaign field if non-nil, zero value otherwise.

### GetCampaignOk

`func (o *CampaignTemplate) GetCampaignOk() (*Campaign, bool)`

GetCampaignOk returns a tuple with the Campaign field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaign

`func (o *CampaignTemplate) SetCampaign(v Campaign)`

SetCampaign sets Campaign field to given value.



