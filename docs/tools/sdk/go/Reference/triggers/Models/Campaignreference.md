---
id: v1-campaignreference
title: Campaignreference
pagination_label: Campaignreference
sidebar_label: Campaignreference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Campaignreference', 'V1Campaignreference'] 
slug: /tools/sdk/go/triggers/models/campaignreference
tags: ['SDK', 'Software Development Kit', 'Campaignreference', 'V1Campaignreference']
---

# Campaignreference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID of the campaign. | 
**Name** | **string** | The name of the campaign. | 
**Type** | **string** | The type of object that is being referenced. | 
**CampaignType** | **string** | The type of the campaign. | 
**Description** | **NullableString** | The description of the campaign set by the admin who created it. | 
**CorrelatedStatus** | **string** | The correlatedStatus of the campaign. Only SOURCE_OWNER campaigns can be Uncorrelated. An Uncorrelated certification campaign only includes Uncorrelated identities (An identity is uncorrelated if it has no accounts on an authoritative source). | 
**MandatoryCommentRequirement** | **string** | Determines whether comments are required for decisions during certification reviews. You can require comments for all decisions, revoke-only decisions, or no decisions. By default, comments are not required for decisions. | 

## Methods

### NewCampaignreference

`func NewCampaignreference(id string, name string, type_ string, campaignType string, description NullableString, correlatedStatus string, mandatoryCommentRequirement string, ) *Campaignreference`

NewCampaignreference instantiates a new Campaignreference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignreferenceWithDefaults

`func NewCampaignreferenceWithDefaults() *Campaignreference`

NewCampaignreferenceWithDefaults instantiates a new Campaignreference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Campaignreference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Campaignreference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Campaignreference) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *Campaignreference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Campaignreference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Campaignreference) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *Campaignreference) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Campaignreference) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Campaignreference) SetType(v string)`

SetType sets Type field to given value.


### GetCampaignType

`func (o *Campaignreference) GetCampaignType() string`

GetCampaignType returns the CampaignType field if non-nil, zero value otherwise.

### GetCampaignTypeOk

`func (o *Campaignreference) GetCampaignTypeOk() (*string, bool)`

GetCampaignTypeOk returns a tuple with the CampaignType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaignType

`func (o *Campaignreference) SetCampaignType(v string)`

SetCampaignType sets CampaignType field to given value.


### GetDescription

`func (o *Campaignreference) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Campaignreference) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Campaignreference) SetDescription(v string)`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *Campaignreference) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Campaignreference) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetCorrelatedStatus

`func (o *Campaignreference) GetCorrelatedStatus() string`

GetCorrelatedStatus returns the CorrelatedStatus field if non-nil, zero value otherwise.

### GetCorrelatedStatusOk

`func (o *Campaignreference) GetCorrelatedStatusOk() (*string, bool)`

GetCorrelatedStatusOk returns a tuple with the CorrelatedStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelatedStatus

`func (o *Campaignreference) SetCorrelatedStatus(v string)`

SetCorrelatedStatus sets CorrelatedStatus field to given value.


### GetMandatoryCommentRequirement

`func (o *Campaignreference) GetMandatoryCommentRequirement() string`

GetMandatoryCommentRequirement returns the MandatoryCommentRequirement field if non-nil, zero value otherwise.

### GetMandatoryCommentRequirementOk

`func (o *Campaignreference) GetMandatoryCommentRequirementOk() (*string, bool)`

GetMandatoryCommentRequirementOk returns a tuple with the MandatoryCommentRequirement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMandatoryCommentRequirement

`func (o *Campaignreference) SetMandatoryCommentRequirement(v string)`

SetMandatoryCommentRequirement sets MandatoryCommentRequirement field to given value.



