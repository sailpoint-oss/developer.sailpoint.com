---
id: v1-campaigntemplate
title: Campaigntemplate
pagination_label: Campaigntemplate
sidebar_label: Campaigntemplate
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Campaigntemplate', 'V1Campaigntemplate'] 
slug: /tools/sdk/go/certificationcampaigns/models/campaigntemplate
tags: ['SDK', 'Software Development Kit', 'Campaigntemplate', 'V1Campaigntemplate']
---

# Campaigntemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Id of the campaign template | [optional] 
**Name** | **string** | This template's name. Has no bearing on generated campaigns' names. | 
**Description** | **string** | This template's description. Has no bearing on generated campaigns' descriptions. | 
**Created** | **SailPointTime** | Creation date of Campaign Template | [readonly] 
**Modified** | **NullableTime** | Modification date of Campaign Template | [readonly] 
**Scheduled** | Pointer to **bool** | Indicates if this campaign template has been scheduled. | [optional] [readonly] [default to false]
**OwnerRef** | Pointer to [**CampaigntemplateOwnerRef**](campaigntemplate-owner-ref) |  | [optional] 
**DeadlineDuration** | Pointer to **NullableString** | The time period during which the campaign should be completed, formatted as an ISO-8601 Duration. When this template generates a campaign, the campaign's deadline will be the current date plus this duration. For example, if generation occurred on 2020-01-01 and this field was \"P2W\" (two weeks), the resulting campaign's deadline would be 2020-01-15 (the current date plus 14 days). | [optional] 
**Campaign** | [**Campaign2**](campaign2) |  | 

## Methods

### NewCampaigntemplate

`func NewCampaigntemplate(name string, description string, created SailPointTime, modified NullableTime, campaign Campaign2, ) *Campaigntemplate`

NewCampaigntemplate instantiates a new Campaigntemplate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaigntemplateWithDefaults

`func NewCampaigntemplateWithDefaults() *Campaigntemplate`

NewCampaigntemplateWithDefaults instantiates a new Campaigntemplate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Campaigntemplate) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Campaigntemplate) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Campaigntemplate) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Campaigntemplate) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Campaigntemplate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Campaigntemplate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Campaigntemplate) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Campaigntemplate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Campaigntemplate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Campaigntemplate) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetCreated

`func (o *Campaigntemplate) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Campaigntemplate) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Campaigntemplate) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *Campaigntemplate) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Campaigntemplate) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Campaigntemplate) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.


### SetModifiedNil

`func (o *Campaigntemplate) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *Campaigntemplate) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetScheduled

`func (o *Campaigntemplate) GetScheduled() bool`

GetScheduled returns the Scheduled field if non-nil, zero value otherwise.

### GetScheduledOk

`func (o *Campaigntemplate) GetScheduledOk() (*bool, bool)`

GetScheduledOk returns a tuple with the Scheduled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduled

`func (o *Campaigntemplate) SetScheduled(v bool)`

SetScheduled sets Scheduled field to given value.

### HasScheduled

`func (o *Campaigntemplate) HasScheduled() bool`

HasScheduled returns a boolean if a field has been set.

### GetOwnerRef

`func (o *Campaigntemplate) GetOwnerRef() CampaigntemplateOwnerRef`

GetOwnerRef returns the OwnerRef field if non-nil, zero value otherwise.

### GetOwnerRefOk

`func (o *Campaigntemplate) GetOwnerRefOk() (*CampaigntemplateOwnerRef, bool)`

GetOwnerRefOk returns a tuple with the OwnerRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerRef

`func (o *Campaigntemplate) SetOwnerRef(v CampaigntemplateOwnerRef)`

SetOwnerRef sets OwnerRef field to given value.

### HasOwnerRef

`func (o *Campaigntemplate) HasOwnerRef() bool`

HasOwnerRef returns a boolean if a field has been set.

### GetDeadlineDuration

`func (o *Campaigntemplate) GetDeadlineDuration() string`

GetDeadlineDuration returns the DeadlineDuration field if non-nil, zero value otherwise.

### GetDeadlineDurationOk

`func (o *Campaigntemplate) GetDeadlineDurationOk() (*string, bool)`

GetDeadlineDurationOk returns a tuple with the DeadlineDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadlineDuration

`func (o *Campaigntemplate) SetDeadlineDuration(v string)`

SetDeadlineDuration sets DeadlineDuration field to given value.

### HasDeadlineDuration

`func (o *Campaigntemplate) HasDeadlineDuration() bool`

HasDeadlineDuration returns a boolean if a field has been set.

### SetDeadlineDurationNil

`func (o *Campaigntemplate) SetDeadlineDurationNil(b bool)`

 SetDeadlineDurationNil sets the value for DeadlineDuration to be an explicit nil

### UnsetDeadlineDuration
`func (o *Campaigntemplate) UnsetDeadlineDuration()`

UnsetDeadlineDuration ensures that no value is present for DeadlineDuration, not even an explicit nil
### GetCampaign

`func (o *Campaigntemplate) GetCampaign() Campaign2`

GetCampaign returns the Campaign field if non-nil, zero value otherwise.

### GetCampaignOk

`func (o *Campaigntemplate) GetCampaignOk() (*Campaign2, bool)`

GetCampaignOk returns a tuple with the Campaign field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaign

`func (o *Campaigntemplate) SetCampaign(v Campaign2)`

SetCampaign sets Campaign field to given value.



