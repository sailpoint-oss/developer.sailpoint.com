---
id: v1-slimcampaign
title: Slimcampaign
pagination_label: Slimcampaign
sidebar_label: Slimcampaign
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Slimcampaign', 'V1Slimcampaign'] 
slug: /tools/sdk/go/certificationcampaigns/models/slimcampaign
tags: ['SDK', 'Software Development Kit', 'Slimcampaign', 'V1Slimcampaign']
---

# Slimcampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableString** | Id of the campaign | [optional] [readonly] 
**Name** | **string** | The campaign name. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details.  | 
**Description** | **NullableString** | The campaign description. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details.  | 
**Deadline** | Pointer to **NullableTime** | The campaign's completion deadline.  This date must be in the future in order to activate the campaign.  If you try to activate a campaign with a deadline of today or in the past, you will receive a 400 error response. | [optional] 
**Type** | **string** | The type of campaign. Could be extended in the future. | 
**EmailNotificationEnabled** | Pointer to **bool** | Enables email notification for this campaign | [optional] [default to false]
**AutoRevokeAllowed** | Pointer to **bool** | Allows auto revoke for this campaign | [optional] [default to false]
**RecommendationsEnabled** | Pointer to **bool** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [optional] [default to false]
**Status** | Pointer to **NullableString** | The campaign's current status. | [optional] [readonly] 
**CorrelatedStatus** | Pointer to **string** | The correlatedStatus of the campaign. Only SOURCE_OWNER campaigns can be Uncorrelated. An Uncorrelated certification campaign only includes Uncorrelated identities (An identity is uncorrelated if it has no accounts on an authoritative source). | [optional] 
**Created** | Pointer to **NullableTime** | Created time of the campaign | [optional] [readonly] 
**TotalCertifications** | Pointer to **NullableInt32** | The total number of certifications in this campaign. | [optional] [readonly] 
**CompletedCertifications** | Pointer to **NullableInt32** | The number of completed certifications in this campaign. | [optional] [readonly] 
**Alerts** | Pointer to [**[]Campaignalert**](campaignalert) | A list of errors and warnings that have accumulated. | [optional] [readonly] 

## Methods

### NewSlimcampaign

`func NewSlimcampaign(name string, description NullableString, type_ string, ) *Slimcampaign`

NewSlimcampaign instantiates a new Slimcampaign object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSlimcampaignWithDefaults

`func NewSlimcampaignWithDefaults() *Slimcampaign`

NewSlimcampaignWithDefaults instantiates a new Slimcampaign object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Slimcampaign) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Slimcampaign) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Slimcampaign) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Slimcampaign) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *Slimcampaign) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *Slimcampaign) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *Slimcampaign) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Slimcampaign) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Slimcampaign) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Slimcampaign) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Slimcampaign) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Slimcampaign) SetDescription(v string)`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *Slimcampaign) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Slimcampaign) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetDeadline

`func (o *Slimcampaign) GetDeadline() SailPointTime`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *Slimcampaign) GetDeadlineOk() (*SailPointTime, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *Slimcampaign) SetDeadline(v SailPointTime)`

SetDeadline sets Deadline field to given value.

### HasDeadline

`func (o *Slimcampaign) HasDeadline() bool`

HasDeadline returns a boolean if a field has been set.

### SetDeadlineNil

`func (o *Slimcampaign) SetDeadlineNil(b bool)`

 SetDeadlineNil sets the value for Deadline to be an explicit nil

### UnsetDeadline
`func (o *Slimcampaign) UnsetDeadline()`

UnsetDeadline ensures that no value is present for Deadline, not even an explicit nil
### GetType

`func (o *Slimcampaign) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Slimcampaign) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Slimcampaign) SetType(v string)`

SetType sets Type field to given value.


### GetEmailNotificationEnabled

`func (o *Slimcampaign) GetEmailNotificationEnabled() bool`

GetEmailNotificationEnabled returns the EmailNotificationEnabled field if non-nil, zero value otherwise.

### GetEmailNotificationEnabledOk

`func (o *Slimcampaign) GetEmailNotificationEnabledOk() (*bool, bool)`

GetEmailNotificationEnabledOk returns a tuple with the EmailNotificationEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailNotificationEnabled

`func (o *Slimcampaign) SetEmailNotificationEnabled(v bool)`

SetEmailNotificationEnabled sets EmailNotificationEnabled field to given value.

### HasEmailNotificationEnabled

`func (o *Slimcampaign) HasEmailNotificationEnabled() bool`

HasEmailNotificationEnabled returns a boolean if a field has been set.

### GetAutoRevokeAllowed

`func (o *Slimcampaign) GetAutoRevokeAllowed() bool`

GetAutoRevokeAllowed returns the AutoRevokeAllowed field if non-nil, zero value otherwise.

### GetAutoRevokeAllowedOk

`func (o *Slimcampaign) GetAutoRevokeAllowedOk() (*bool, bool)`

GetAutoRevokeAllowedOk returns a tuple with the AutoRevokeAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoRevokeAllowed

`func (o *Slimcampaign) SetAutoRevokeAllowed(v bool)`

SetAutoRevokeAllowed sets AutoRevokeAllowed field to given value.

### HasAutoRevokeAllowed

`func (o *Slimcampaign) HasAutoRevokeAllowed() bool`

HasAutoRevokeAllowed returns a boolean if a field has been set.

### GetRecommendationsEnabled

`func (o *Slimcampaign) GetRecommendationsEnabled() bool`

GetRecommendationsEnabled returns the RecommendationsEnabled field if non-nil, zero value otherwise.

### GetRecommendationsEnabledOk

`func (o *Slimcampaign) GetRecommendationsEnabledOk() (*bool, bool)`

GetRecommendationsEnabledOk returns a tuple with the RecommendationsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendationsEnabled

`func (o *Slimcampaign) SetRecommendationsEnabled(v bool)`

SetRecommendationsEnabled sets RecommendationsEnabled field to given value.

### HasRecommendationsEnabled

`func (o *Slimcampaign) HasRecommendationsEnabled() bool`

HasRecommendationsEnabled returns a boolean if a field has been set.

### GetStatus

`func (o *Slimcampaign) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Slimcampaign) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Slimcampaign) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Slimcampaign) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### SetStatusNil

`func (o *Slimcampaign) SetStatusNil(b bool)`

 SetStatusNil sets the value for Status to be an explicit nil

### UnsetStatus
`func (o *Slimcampaign) UnsetStatus()`

UnsetStatus ensures that no value is present for Status, not even an explicit nil
### GetCorrelatedStatus

`func (o *Slimcampaign) GetCorrelatedStatus() string`

GetCorrelatedStatus returns the CorrelatedStatus field if non-nil, zero value otherwise.

### GetCorrelatedStatusOk

`func (o *Slimcampaign) GetCorrelatedStatusOk() (*string, bool)`

GetCorrelatedStatusOk returns a tuple with the CorrelatedStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelatedStatus

`func (o *Slimcampaign) SetCorrelatedStatus(v string)`

SetCorrelatedStatus sets CorrelatedStatus field to given value.

### HasCorrelatedStatus

`func (o *Slimcampaign) HasCorrelatedStatus() bool`

HasCorrelatedStatus returns a boolean if a field has been set.

### GetCreated

`func (o *Slimcampaign) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Slimcampaign) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Slimcampaign) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Slimcampaign) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *Slimcampaign) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *Slimcampaign) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetTotalCertifications

`func (o *Slimcampaign) GetTotalCertifications() int32`

GetTotalCertifications returns the TotalCertifications field if non-nil, zero value otherwise.

### GetTotalCertificationsOk

`func (o *Slimcampaign) GetTotalCertificationsOk() (*int32, bool)`

GetTotalCertificationsOk returns a tuple with the TotalCertifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCertifications

`func (o *Slimcampaign) SetTotalCertifications(v int32)`

SetTotalCertifications sets TotalCertifications field to given value.

### HasTotalCertifications

`func (o *Slimcampaign) HasTotalCertifications() bool`

HasTotalCertifications returns a boolean if a field has been set.

### SetTotalCertificationsNil

`func (o *Slimcampaign) SetTotalCertificationsNil(b bool)`

 SetTotalCertificationsNil sets the value for TotalCertifications to be an explicit nil

### UnsetTotalCertifications
`func (o *Slimcampaign) UnsetTotalCertifications()`

UnsetTotalCertifications ensures that no value is present for TotalCertifications, not even an explicit nil
### GetCompletedCertifications

`func (o *Slimcampaign) GetCompletedCertifications() int32`

GetCompletedCertifications returns the CompletedCertifications field if non-nil, zero value otherwise.

### GetCompletedCertificationsOk

`func (o *Slimcampaign) GetCompletedCertificationsOk() (*int32, bool)`

GetCompletedCertificationsOk returns a tuple with the CompletedCertifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedCertifications

`func (o *Slimcampaign) SetCompletedCertifications(v int32)`

SetCompletedCertifications sets CompletedCertifications field to given value.

### HasCompletedCertifications

`func (o *Slimcampaign) HasCompletedCertifications() bool`

HasCompletedCertifications returns a boolean if a field has been set.

### SetCompletedCertificationsNil

`func (o *Slimcampaign) SetCompletedCertificationsNil(b bool)`

 SetCompletedCertificationsNil sets the value for CompletedCertifications to be an explicit nil

### UnsetCompletedCertifications
`func (o *Slimcampaign) UnsetCompletedCertifications()`

UnsetCompletedCertifications ensures that no value is present for CompletedCertifications, not even an explicit nil
### GetAlerts

`func (o *Slimcampaign) GetAlerts() []Campaignalert`

GetAlerts returns the Alerts field if non-nil, zero value otherwise.

### GetAlertsOk

`func (o *Slimcampaign) GetAlertsOk() (*[]Campaignalert, bool)`

GetAlertsOk returns a tuple with the Alerts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlerts

`func (o *Slimcampaign) SetAlerts(v []Campaignalert)`

SetAlerts sets Alerts field to given value.

### HasAlerts

`func (o *Slimcampaign) HasAlerts() bool`

HasAlerts returns a boolean if a field has been set.

### SetAlertsNil

`func (o *Slimcampaign) SetAlertsNil(b bool)`

 SetAlertsNil sets the value for Alerts to be an explicit nil

### UnsetAlerts
`func (o *Slimcampaign) UnsetAlerts()`

UnsetAlerts ensures that no value is present for Alerts, not even an explicit nil

