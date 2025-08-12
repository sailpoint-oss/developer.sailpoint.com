---
id: v2025-slim-campaign
title: SlimCampaign
pagination_label: SlimCampaign
sidebar_label: SlimCampaign
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SlimCampaign', 'V2025SlimCampaign'] 
slug: /tools/sdk/go/v2025/models/slim-campaign
tags: ['SDK', 'Software Development Kit', 'SlimCampaign', 'V2025SlimCampaign']
---

# SlimCampaign

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
**Alerts** | Pointer to [**[]CampaignAlert**](campaign-alert) | A list of errors and warnings that have accumulated. | [optional] [readonly] 

## Methods

### NewSlimCampaign

`func NewSlimCampaign(name string, description NullableString, type_ string, ) *SlimCampaign`

NewSlimCampaign instantiates a new SlimCampaign object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSlimCampaignWithDefaults

`func NewSlimCampaignWithDefaults() *SlimCampaign`

NewSlimCampaignWithDefaults instantiates a new SlimCampaign object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SlimCampaign) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SlimCampaign) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SlimCampaign) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SlimCampaign) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *SlimCampaign) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *SlimCampaign) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *SlimCampaign) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SlimCampaign) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SlimCampaign) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *SlimCampaign) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SlimCampaign) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SlimCampaign) SetDescription(v string)`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *SlimCampaign) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *SlimCampaign) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetDeadline

`func (o *SlimCampaign) GetDeadline() SailPointTime`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *SlimCampaign) GetDeadlineOk() (*SailPointTime, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *SlimCampaign) SetDeadline(v SailPointTime)`

SetDeadline sets Deadline field to given value.

### HasDeadline

`func (o *SlimCampaign) HasDeadline() bool`

HasDeadline returns a boolean if a field has been set.

### SetDeadlineNil

`func (o *SlimCampaign) SetDeadlineNil(b bool)`

 SetDeadlineNil sets the value for Deadline to be an explicit nil

### UnsetDeadline
`func (o *SlimCampaign) UnsetDeadline()`

UnsetDeadline ensures that no value is present for Deadline, not even an explicit nil
### GetType

`func (o *SlimCampaign) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SlimCampaign) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SlimCampaign) SetType(v string)`

SetType sets Type field to given value.


### GetEmailNotificationEnabled

`func (o *SlimCampaign) GetEmailNotificationEnabled() bool`

GetEmailNotificationEnabled returns the EmailNotificationEnabled field if non-nil, zero value otherwise.

### GetEmailNotificationEnabledOk

`func (o *SlimCampaign) GetEmailNotificationEnabledOk() (*bool, bool)`

GetEmailNotificationEnabledOk returns a tuple with the EmailNotificationEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailNotificationEnabled

`func (o *SlimCampaign) SetEmailNotificationEnabled(v bool)`

SetEmailNotificationEnabled sets EmailNotificationEnabled field to given value.

### HasEmailNotificationEnabled

`func (o *SlimCampaign) HasEmailNotificationEnabled() bool`

HasEmailNotificationEnabled returns a boolean if a field has been set.

### GetAutoRevokeAllowed

`func (o *SlimCampaign) GetAutoRevokeAllowed() bool`

GetAutoRevokeAllowed returns the AutoRevokeAllowed field if non-nil, zero value otherwise.

### GetAutoRevokeAllowedOk

`func (o *SlimCampaign) GetAutoRevokeAllowedOk() (*bool, bool)`

GetAutoRevokeAllowedOk returns a tuple with the AutoRevokeAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoRevokeAllowed

`func (o *SlimCampaign) SetAutoRevokeAllowed(v bool)`

SetAutoRevokeAllowed sets AutoRevokeAllowed field to given value.

### HasAutoRevokeAllowed

`func (o *SlimCampaign) HasAutoRevokeAllowed() bool`

HasAutoRevokeAllowed returns a boolean if a field has been set.

### GetRecommendationsEnabled

`func (o *SlimCampaign) GetRecommendationsEnabled() bool`

GetRecommendationsEnabled returns the RecommendationsEnabled field if non-nil, zero value otherwise.

### GetRecommendationsEnabledOk

`func (o *SlimCampaign) GetRecommendationsEnabledOk() (*bool, bool)`

GetRecommendationsEnabledOk returns a tuple with the RecommendationsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendationsEnabled

`func (o *SlimCampaign) SetRecommendationsEnabled(v bool)`

SetRecommendationsEnabled sets RecommendationsEnabled field to given value.

### HasRecommendationsEnabled

`func (o *SlimCampaign) HasRecommendationsEnabled() bool`

HasRecommendationsEnabled returns a boolean if a field has been set.

### GetStatus

`func (o *SlimCampaign) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SlimCampaign) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SlimCampaign) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *SlimCampaign) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### SetStatusNil

`func (o *SlimCampaign) SetStatusNil(b bool)`

 SetStatusNil sets the value for Status to be an explicit nil

### UnsetStatus
`func (o *SlimCampaign) UnsetStatus()`

UnsetStatus ensures that no value is present for Status, not even an explicit nil
### GetCorrelatedStatus

`func (o *SlimCampaign) GetCorrelatedStatus() string`

GetCorrelatedStatus returns the CorrelatedStatus field if non-nil, zero value otherwise.

### GetCorrelatedStatusOk

`func (o *SlimCampaign) GetCorrelatedStatusOk() (*string, bool)`

GetCorrelatedStatusOk returns a tuple with the CorrelatedStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelatedStatus

`func (o *SlimCampaign) SetCorrelatedStatus(v string)`

SetCorrelatedStatus sets CorrelatedStatus field to given value.

### HasCorrelatedStatus

`func (o *SlimCampaign) HasCorrelatedStatus() bool`

HasCorrelatedStatus returns a boolean if a field has been set.

### GetCreated

`func (o *SlimCampaign) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SlimCampaign) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SlimCampaign) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SlimCampaign) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *SlimCampaign) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *SlimCampaign) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetTotalCertifications

`func (o *SlimCampaign) GetTotalCertifications() int32`

GetTotalCertifications returns the TotalCertifications field if non-nil, zero value otherwise.

### GetTotalCertificationsOk

`func (o *SlimCampaign) GetTotalCertificationsOk() (*int32, bool)`

GetTotalCertificationsOk returns a tuple with the TotalCertifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCertifications

`func (o *SlimCampaign) SetTotalCertifications(v int32)`

SetTotalCertifications sets TotalCertifications field to given value.

### HasTotalCertifications

`func (o *SlimCampaign) HasTotalCertifications() bool`

HasTotalCertifications returns a boolean if a field has been set.

### SetTotalCertificationsNil

`func (o *SlimCampaign) SetTotalCertificationsNil(b bool)`

 SetTotalCertificationsNil sets the value for TotalCertifications to be an explicit nil

### UnsetTotalCertifications
`func (o *SlimCampaign) UnsetTotalCertifications()`

UnsetTotalCertifications ensures that no value is present for TotalCertifications, not even an explicit nil
### GetCompletedCertifications

`func (o *SlimCampaign) GetCompletedCertifications() int32`

GetCompletedCertifications returns the CompletedCertifications field if non-nil, zero value otherwise.

### GetCompletedCertificationsOk

`func (o *SlimCampaign) GetCompletedCertificationsOk() (*int32, bool)`

GetCompletedCertificationsOk returns a tuple with the CompletedCertifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedCertifications

`func (o *SlimCampaign) SetCompletedCertifications(v int32)`

SetCompletedCertifications sets CompletedCertifications field to given value.

### HasCompletedCertifications

`func (o *SlimCampaign) HasCompletedCertifications() bool`

HasCompletedCertifications returns a boolean if a field has been set.

### SetCompletedCertificationsNil

`func (o *SlimCampaign) SetCompletedCertificationsNil(b bool)`

 SetCompletedCertificationsNil sets the value for CompletedCertifications to be an explicit nil

### UnsetCompletedCertifications
`func (o *SlimCampaign) UnsetCompletedCertifications()`

UnsetCompletedCertifications ensures that no value is present for CompletedCertifications, not even an explicit nil
### GetAlerts

`func (o *SlimCampaign) GetAlerts() []CampaignAlert`

GetAlerts returns the Alerts field if non-nil, zero value otherwise.

### GetAlertsOk

`func (o *SlimCampaign) GetAlertsOk() (*[]CampaignAlert, bool)`

GetAlertsOk returns a tuple with the Alerts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlerts

`func (o *SlimCampaign) SetAlerts(v []CampaignAlert)`

SetAlerts sets Alerts field to given value.

### HasAlerts

`func (o *SlimCampaign) HasAlerts() bool`

HasAlerts returns a boolean if a field has been set.

### SetAlertsNil

`func (o *SlimCampaign) SetAlertsNil(b bool)`

 SetAlertsNil sets the value for Alerts to be an explicit nil

### UnsetAlerts
`func (o *SlimCampaign) UnsetAlerts()`

UnsetAlerts ensures that no value is present for Alerts, not even an explicit nil

