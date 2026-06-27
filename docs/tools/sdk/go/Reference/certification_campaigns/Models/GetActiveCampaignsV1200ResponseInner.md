---
id: v1-get-active-campaigns-v1200-response-inner
title: GetActiveCampaignsV1200ResponseInner
pagination_label: GetActiveCampaignsV1200ResponseInner
sidebar_label: GetActiveCampaignsV1200ResponseInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetActiveCampaignsV1200ResponseInner', 'V1GetActiveCampaignsV1200ResponseInner'] 
slug: /tools/sdk/go/certificationcampaigns/models/get-active-campaigns-v1200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetActiveCampaignsV1200ResponseInner', 'V1GetActiveCampaignsV1200ResponseInner']
---

# GetActiveCampaignsV1200ResponseInner

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
**Modified** | Pointer to **NullableTime** | Modified time of the campaign | [optional] [readonly] 
**Filter** | Pointer to [**NullableCampaign2AllOfFilter**](campaign2-all-of-filter) |  | [optional] 
**SunsetCommentsRequired** | Pointer to **bool** | Determines if comments on sunset date changes are required. | [optional] [default to true]
**SourceOwnerCampaignInfo** | Pointer to [**NullableCampaign2AllOfSourceOwnerCampaignInfo**](campaign2-all-of-source-owner-campaign-info) |  | [optional] 
**SearchCampaignInfo** | Pointer to [**NullableCampaign2AllOfSearchCampaignInfo**](campaign2-all-of-search-campaign-info) |  | [optional] 
**RoleCompositionCampaignInfo** | Pointer to [**NullableCampaign2AllOfRoleCompositionCampaignInfo**](campaign2-all-of-role-composition-campaign-info) |  | [optional] 
**MachineAccountCampaignInfo** | Pointer to [**NullableCampaign2AllOfMachineAccountCampaignInfo**](campaign2-all-of-machine-account-campaign-info) |  | [optional] 
**SourcesWithOrphanEntitlements** | Pointer to [**[]Campaign2AllOfSourcesWithOrphanEntitlements**](campaign2-all-of-sources-with-orphan-entitlements) | A list of sources in the campaign that contain \\\"orphan entitlements\\\" (entitlements without a corresponding Managed Attribute). An empty list indicates the campaign has no orphan entitlements. Null indicates there may be unknown orphan entitlements in the campaign (the campaign was created before this feature was implemented). | [optional] [readonly] 
**MandatoryCommentRequirement** | Pointer to **string** | Determines whether comments are required for decisions during certification reviews. You can require comments for all decisions, revoke-only decisions, or no decisions. By default, comments are not required for decisions. | [optional] 

## Methods

### NewGetActiveCampaignsV1200ResponseInner

`func NewGetActiveCampaignsV1200ResponseInner(name string, description NullableString, type_ string, ) *GetActiveCampaignsV1200ResponseInner`

NewGetActiveCampaignsV1200ResponseInner instantiates a new GetActiveCampaignsV1200ResponseInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetActiveCampaignsV1200ResponseInnerWithDefaults

`func NewGetActiveCampaignsV1200ResponseInnerWithDefaults() *GetActiveCampaignsV1200ResponseInner`

NewGetActiveCampaignsV1200ResponseInnerWithDefaults instantiates a new GetActiveCampaignsV1200ResponseInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *GetActiveCampaignsV1200ResponseInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetActiveCampaignsV1200ResponseInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetActiveCampaignsV1200ResponseInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *GetActiveCampaignsV1200ResponseInner) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *GetActiveCampaignsV1200ResponseInner) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *GetActiveCampaignsV1200ResponseInner) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *GetActiveCampaignsV1200ResponseInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GetActiveCampaignsV1200ResponseInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GetActiveCampaignsV1200ResponseInner) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *GetActiveCampaignsV1200ResponseInner) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *GetActiveCampaignsV1200ResponseInner) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *GetActiveCampaignsV1200ResponseInner) SetDescription(v string)`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *GetActiveCampaignsV1200ResponseInner) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *GetActiveCampaignsV1200ResponseInner) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetDeadline

`func (o *GetActiveCampaignsV1200ResponseInner) GetDeadline() SailPointTime`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *GetActiveCampaignsV1200ResponseInner) GetDeadlineOk() (*SailPointTime, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *GetActiveCampaignsV1200ResponseInner) SetDeadline(v SailPointTime)`

SetDeadline sets Deadline field to given value.

### HasDeadline

`func (o *GetActiveCampaignsV1200ResponseInner) HasDeadline() bool`

HasDeadline returns a boolean if a field has been set.

### SetDeadlineNil

`func (o *GetActiveCampaignsV1200ResponseInner) SetDeadlineNil(b bool)`

 SetDeadlineNil sets the value for Deadline to be an explicit nil

### UnsetDeadline
`func (o *GetActiveCampaignsV1200ResponseInner) UnsetDeadline()`

UnsetDeadline ensures that no value is present for Deadline, not even an explicit nil
### GetType

`func (o *GetActiveCampaignsV1200ResponseInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *GetActiveCampaignsV1200ResponseInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *GetActiveCampaignsV1200ResponseInner) SetType(v string)`

SetType sets Type field to given value.


### GetEmailNotificationEnabled

`func (o *GetActiveCampaignsV1200ResponseInner) GetEmailNotificationEnabled() bool`

GetEmailNotificationEnabled returns the EmailNotificationEnabled field if non-nil, zero value otherwise.

### GetEmailNotificationEnabledOk

`func (o *GetActiveCampaignsV1200ResponseInner) GetEmailNotificationEnabledOk() (*bool, bool)`

GetEmailNotificationEnabledOk returns a tuple with the EmailNotificationEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailNotificationEnabled

`func (o *GetActiveCampaignsV1200ResponseInner) SetEmailNotificationEnabled(v bool)`

SetEmailNotificationEnabled sets EmailNotificationEnabled field to given value.

### HasEmailNotificationEnabled

`func (o *GetActiveCampaignsV1200ResponseInner) HasEmailNotificationEnabled() bool`

HasEmailNotificationEnabled returns a boolean if a field has been set.

### GetAutoRevokeAllowed

`func (o *GetActiveCampaignsV1200ResponseInner) GetAutoRevokeAllowed() bool`

GetAutoRevokeAllowed returns the AutoRevokeAllowed field if non-nil, zero value otherwise.

### GetAutoRevokeAllowedOk

`func (o *GetActiveCampaignsV1200ResponseInner) GetAutoRevokeAllowedOk() (*bool, bool)`

GetAutoRevokeAllowedOk returns a tuple with the AutoRevokeAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoRevokeAllowed

`func (o *GetActiveCampaignsV1200ResponseInner) SetAutoRevokeAllowed(v bool)`

SetAutoRevokeAllowed sets AutoRevokeAllowed field to given value.

### HasAutoRevokeAllowed

`func (o *GetActiveCampaignsV1200ResponseInner) HasAutoRevokeAllowed() bool`

HasAutoRevokeAllowed returns a boolean if a field has been set.

### GetRecommendationsEnabled

`func (o *GetActiveCampaignsV1200ResponseInner) GetRecommendationsEnabled() bool`

GetRecommendationsEnabled returns the RecommendationsEnabled field if non-nil, zero value otherwise.

### GetRecommendationsEnabledOk

`func (o *GetActiveCampaignsV1200ResponseInner) GetRecommendationsEnabledOk() (*bool, bool)`

GetRecommendationsEnabledOk returns a tuple with the RecommendationsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendationsEnabled

`func (o *GetActiveCampaignsV1200ResponseInner) SetRecommendationsEnabled(v bool)`

SetRecommendationsEnabled sets RecommendationsEnabled field to given value.

### HasRecommendationsEnabled

`func (o *GetActiveCampaignsV1200ResponseInner) HasRecommendationsEnabled() bool`

HasRecommendationsEnabled returns a boolean if a field has been set.

### GetStatus

`func (o *GetActiveCampaignsV1200ResponseInner) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GetActiveCampaignsV1200ResponseInner) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GetActiveCampaignsV1200ResponseInner) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GetActiveCampaignsV1200ResponseInner) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### SetStatusNil

`func (o *GetActiveCampaignsV1200ResponseInner) SetStatusNil(b bool)`

 SetStatusNil sets the value for Status to be an explicit nil

### UnsetStatus
`func (o *GetActiveCampaignsV1200ResponseInner) UnsetStatus()`

UnsetStatus ensures that no value is present for Status, not even an explicit nil
### GetCorrelatedStatus

`func (o *GetActiveCampaignsV1200ResponseInner) GetCorrelatedStatus() string`

GetCorrelatedStatus returns the CorrelatedStatus field if non-nil, zero value otherwise.

### GetCorrelatedStatusOk

`func (o *GetActiveCampaignsV1200ResponseInner) GetCorrelatedStatusOk() (*string, bool)`

GetCorrelatedStatusOk returns a tuple with the CorrelatedStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelatedStatus

`func (o *GetActiveCampaignsV1200ResponseInner) SetCorrelatedStatus(v string)`

SetCorrelatedStatus sets CorrelatedStatus field to given value.

### HasCorrelatedStatus

`func (o *GetActiveCampaignsV1200ResponseInner) HasCorrelatedStatus() bool`

HasCorrelatedStatus returns a boolean if a field has been set.

### GetCreated

`func (o *GetActiveCampaignsV1200ResponseInner) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *GetActiveCampaignsV1200ResponseInner) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *GetActiveCampaignsV1200ResponseInner) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *GetActiveCampaignsV1200ResponseInner) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *GetActiveCampaignsV1200ResponseInner) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *GetActiveCampaignsV1200ResponseInner) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetTotalCertifications

`func (o *GetActiveCampaignsV1200ResponseInner) GetTotalCertifications() int32`

GetTotalCertifications returns the TotalCertifications field if non-nil, zero value otherwise.

### GetTotalCertificationsOk

`func (o *GetActiveCampaignsV1200ResponseInner) GetTotalCertificationsOk() (*int32, bool)`

GetTotalCertificationsOk returns a tuple with the TotalCertifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCertifications

`func (o *GetActiveCampaignsV1200ResponseInner) SetTotalCertifications(v int32)`

SetTotalCertifications sets TotalCertifications field to given value.

### HasTotalCertifications

`func (o *GetActiveCampaignsV1200ResponseInner) HasTotalCertifications() bool`

HasTotalCertifications returns a boolean if a field has been set.

### SetTotalCertificationsNil

`func (o *GetActiveCampaignsV1200ResponseInner) SetTotalCertificationsNil(b bool)`

 SetTotalCertificationsNil sets the value for TotalCertifications to be an explicit nil

### UnsetTotalCertifications
`func (o *GetActiveCampaignsV1200ResponseInner) UnsetTotalCertifications()`

UnsetTotalCertifications ensures that no value is present for TotalCertifications, not even an explicit nil
### GetCompletedCertifications

`func (o *GetActiveCampaignsV1200ResponseInner) GetCompletedCertifications() int32`

GetCompletedCertifications returns the CompletedCertifications field if non-nil, zero value otherwise.

### GetCompletedCertificationsOk

`func (o *GetActiveCampaignsV1200ResponseInner) GetCompletedCertificationsOk() (*int32, bool)`

GetCompletedCertificationsOk returns a tuple with the CompletedCertifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedCertifications

`func (o *GetActiveCampaignsV1200ResponseInner) SetCompletedCertifications(v int32)`

SetCompletedCertifications sets CompletedCertifications field to given value.

### HasCompletedCertifications

`func (o *GetActiveCampaignsV1200ResponseInner) HasCompletedCertifications() bool`

HasCompletedCertifications returns a boolean if a field has been set.

### SetCompletedCertificationsNil

`func (o *GetActiveCampaignsV1200ResponseInner) SetCompletedCertificationsNil(b bool)`

 SetCompletedCertificationsNil sets the value for CompletedCertifications to be an explicit nil

### UnsetCompletedCertifications
`func (o *GetActiveCampaignsV1200ResponseInner) UnsetCompletedCertifications()`

UnsetCompletedCertifications ensures that no value is present for CompletedCertifications, not even an explicit nil
### GetAlerts

`func (o *GetActiveCampaignsV1200ResponseInner) GetAlerts() []Campaignalert`

GetAlerts returns the Alerts field if non-nil, zero value otherwise.

### GetAlertsOk

`func (o *GetActiveCampaignsV1200ResponseInner) GetAlertsOk() (*[]Campaignalert, bool)`

GetAlertsOk returns a tuple with the Alerts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlerts

`func (o *GetActiveCampaignsV1200ResponseInner) SetAlerts(v []Campaignalert)`

SetAlerts sets Alerts field to given value.

### HasAlerts

`func (o *GetActiveCampaignsV1200ResponseInner) HasAlerts() bool`

HasAlerts returns a boolean if a field has been set.

### SetAlertsNil

`func (o *GetActiveCampaignsV1200ResponseInner) SetAlertsNil(b bool)`

 SetAlertsNil sets the value for Alerts to be an explicit nil

### UnsetAlerts
`func (o *GetActiveCampaignsV1200ResponseInner) UnsetAlerts()`

UnsetAlerts ensures that no value is present for Alerts, not even an explicit nil
### GetModified

`func (o *GetActiveCampaignsV1200ResponseInner) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *GetActiveCampaignsV1200ResponseInner) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *GetActiveCampaignsV1200ResponseInner) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *GetActiveCampaignsV1200ResponseInner) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *GetActiveCampaignsV1200ResponseInner) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *GetActiveCampaignsV1200ResponseInner) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetFilter

`func (o *GetActiveCampaignsV1200ResponseInner) GetFilter() Campaign2AllOfFilter`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *GetActiveCampaignsV1200ResponseInner) GetFilterOk() (*Campaign2AllOfFilter, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *GetActiveCampaignsV1200ResponseInner) SetFilter(v Campaign2AllOfFilter)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *GetActiveCampaignsV1200ResponseInner) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### SetFilterNil

`func (o *GetActiveCampaignsV1200ResponseInner) SetFilterNil(b bool)`

 SetFilterNil sets the value for Filter to be an explicit nil

### UnsetFilter
`func (o *GetActiveCampaignsV1200ResponseInner) UnsetFilter()`

UnsetFilter ensures that no value is present for Filter, not even an explicit nil
### GetSunsetCommentsRequired

`func (o *GetActiveCampaignsV1200ResponseInner) GetSunsetCommentsRequired() bool`

GetSunsetCommentsRequired returns the SunsetCommentsRequired field if non-nil, zero value otherwise.

### GetSunsetCommentsRequiredOk

`func (o *GetActiveCampaignsV1200ResponseInner) GetSunsetCommentsRequiredOk() (*bool, bool)`

GetSunsetCommentsRequiredOk returns a tuple with the SunsetCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunsetCommentsRequired

`func (o *GetActiveCampaignsV1200ResponseInner) SetSunsetCommentsRequired(v bool)`

SetSunsetCommentsRequired sets SunsetCommentsRequired field to given value.

### HasSunsetCommentsRequired

`func (o *GetActiveCampaignsV1200ResponseInner) HasSunsetCommentsRequired() bool`

HasSunsetCommentsRequired returns a boolean if a field has been set.

### GetSourceOwnerCampaignInfo

`func (o *GetActiveCampaignsV1200ResponseInner) GetSourceOwnerCampaignInfo() Campaign2AllOfSourceOwnerCampaignInfo`

GetSourceOwnerCampaignInfo returns the SourceOwnerCampaignInfo field if non-nil, zero value otherwise.

### GetSourceOwnerCampaignInfoOk

`func (o *GetActiveCampaignsV1200ResponseInner) GetSourceOwnerCampaignInfoOk() (*Campaign2AllOfSourceOwnerCampaignInfo, bool)`

GetSourceOwnerCampaignInfoOk returns a tuple with the SourceOwnerCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceOwnerCampaignInfo

`func (o *GetActiveCampaignsV1200ResponseInner) SetSourceOwnerCampaignInfo(v Campaign2AllOfSourceOwnerCampaignInfo)`

SetSourceOwnerCampaignInfo sets SourceOwnerCampaignInfo field to given value.

### HasSourceOwnerCampaignInfo

`func (o *GetActiveCampaignsV1200ResponseInner) HasSourceOwnerCampaignInfo() bool`

HasSourceOwnerCampaignInfo returns a boolean if a field has been set.

### SetSourceOwnerCampaignInfoNil

`func (o *GetActiveCampaignsV1200ResponseInner) SetSourceOwnerCampaignInfoNil(b bool)`

 SetSourceOwnerCampaignInfoNil sets the value for SourceOwnerCampaignInfo to be an explicit nil

### UnsetSourceOwnerCampaignInfo
`func (o *GetActiveCampaignsV1200ResponseInner) UnsetSourceOwnerCampaignInfo()`

UnsetSourceOwnerCampaignInfo ensures that no value is present for SourceOwnerCampaignInfo, not even an explicit nil
### GetSearchCampaignInfo

`func (o *GetActiveCampaignsV1200ResponseInner) GetSearchCampaignInfo() Campaign2AllOfSearchCampaignInfo`

GetSearchCampaignInfo returns the SearchCampaignInfo field if non-nil, zero value otherwise.

### GetSearchCampaignInfoOk

`func (o *GetActiveCampaignsV1200ResponseInner) GetSearchCampaignInfoOk() (*Campaign2AllOfSearchCampaignInfo, bool)`

GetSearchCampaignInfoOk returns a tuple with the SearchCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchCampaignInfo

`func (o *GetActiveCampaignsV1200ResponseInner) SetSearchCampaignInfo(v Campaign2AllOfSearchCampaignInfo)`

SetSearchCampaignInfo sets SearchCampaignInfo field to given value.

### HasSearchCampaignInfo

`func (o *GetActiveCampaignsV1200ResponseInner) HasSearchCampaignInfo() bool`

HasSearchCampaignInfo returns a boolean if a field has been set.

### SetSearchCampaignInfoNil

`func (o *GetActiveCampaignsV1200ResponseInner) SetSearchCampaignInfoNil(b bool)`

 SetSearchCampaignInfoNil sets the value for SearchCampaignInfo to be an explicit nil

### UnsetSearchCampaignInfo
`func (o *GetActiveCampaignsV1200ResponseInner) UnsetSearchCampaignInfo()`

UnsetSearchCampaignInfo ensures that no value is present for SearchCampaignInfo, not even an explicit nil
### GetRoleCompositionCampaignInfo

`func (o *GetActiveCampaignsV1200ResponseInner) GetRoleCompositionCampaignInfo() Campaign2AllOfRoleCompositionCampaignInfo`

GetRoleCompositionCampaignInfo returns the RoleCompositionCampaignInfo field if non-nil, zero value otherwise.

### GetRoleCompositionCampaignInfoOk

`func (o *GetActiveCampaignsV1200ResponseInner) GetRoleCompositionCampaignInfoOk() (*Campaign2AllOfRoleCompositionCampaignInfo, bool)`

GetRoleCompositionCampaignInfoOk returns a tuple with the RoleCompositionCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleCompositionCampaignInfo

`func (o *GetActiveCampaignsV1200ResponseInner) SetRoleCompositionCampaignInfo(v Campaign2AllOfRoleCompositionCampaignInfo)`

SetRoleCompositionCampaignInfo sets RoleCompositionCampaignInfo field to given value.

### HasRoleCompositionCampaignInfo

`func (o *GetActiveCampaignsV1200ResponseInner) HasRoleCompositionCampaignInfo() bool`

HasRoleCompositionCampaignInfo returns a boolean if a field has been set.

### SetRoleCompositionCampaignInfoNil

`func (o *GetActiveCampaignsV1200ResponseInner) SetRoleCompositionCampaignInfoNil(b bool)`

 SetRoleCompositionCampaignInfoNil sets the value for RoleCompositionCampaignInfo to be an explicit nil

### UnsetRoleCompositionCampaignInfo
`func (o *GetActiveCampaignsV1200ResponseInner) UnsetRoleCompositionCampaignInfo()`

UnsetRoleCompositionCampaignInfo ensures that no value is present for RoleCompositionCampaignInfo, not even an explicit nil
### GetMachineAccountCampaignInfo

`func (o *GetActiveCampaignsV1200ResponseInner) GetMachineAccountCampaignInfo() Campaign2AllOfMachineAccountCampaignInfo`

GetMachineAccountCampaignInfo returns the MachineAccountCampaignInfo field if non-nil, zero value otherwise.

### GetMachineAccountCampaignInfoOk

`func (o *GetActiveCampaignsV1200ResponseInner) GetMachineAccountCampaignInfoOk() (*Campaign2AllOfMachineAccountCampaignInfo, bool)`

GetMachineAccountCampaignInfoOk returns a tuple with the MachineAccountCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineAccountCampaignInfo

`func (o *GetActiveCampaignsV1200ResponseInner) SetMachineAccountCampaignInfo(v Campaign2AllOfMachineAccountCampaignInfo)`

SetMachineAccountCampaignInfo sets MachineAccountCampaignInfo field to given value.

### HasMachineAccountCampaignInfo

`func (o *GetActiveCampaignsV1200ResponseInner) HasMachineAccountCampaignInfo() bool`

HasMachineAccountCampaignInfo returns a boolean if a field has been set.

### SetMachineAccountCampaignInfoNil

`func (o *GetActiveCampaignsV1200ResponseInner) SetMachineAccountCampaignInfoNil(b bool)`

 SetMachineAccountCampaignInfoNil sets the value for MachineAccountCampaignInfo to be an explicit nil

### UnsetMachineAccountCampaignInfo
`func (o *GetActiveCampaignsV1200ResponseInner) UnsetMachineAccountCampaignInfo()`

UnsetMachineAccountCampaignInfo ensures that no value is present for MachineAccountCampaignInfo, not even an explicit nil
### GetSourcesWithOrphanEntitlements

`func (o *GetActiveCampaignsV1200ResponseInner) GetSourcesWithOrphanEntitlements() []Campaign2AllOfSourcesWithOrphanEntitlements`

GetSourcesWithOrphanEntitlements returns the SourcesWithOrphanEntitlements field if non-nil, zero value otherwise.

### GetSourcesWithOrphanEntitlementsOk

`func (o *GetActiveCampaignsV1200ResponseInner) GetSourcesWithOrphanEntitlementsOk() (*[]Campaign2AllOfSourcesWithOrphanEntitlements, bool)`

GetSourcesWithOrphanEntitlementsOk returns a tuple with the SourcesWithOrphanEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourcesWithOrphanEntitlements

`func (o *GetActiveCampaignsV1200ResponseInner) SetSourcesWithOrphanEntitlements(v []Campaign2AllOfSourcesWithOrphanEntitlements)`

SetSourcesWithOrphanEntitlements sets SourcesWithOrphanEntitlements field to given value.

### HasSourcesWithOrphanEntitlements

`func (o *GetActiveCampaignsV1200ResponseInner) HasSourcesWithOrphanEntitlements() bool`

HasSourcesWithOrphanEntitlements returns a boolean if a field has been set.

### SetSourcesWithOrphanEntitlementsNil

`func (o *GetActiveCampaignsV1200ResponseInner) SetSourcesWithOrphanEntitlementsNil(b bool)`

 SetSourcesWithOrphanEntitlementsNil sets the value for SourcesWithOrphanEntitlements to be an explicit nil

### UnsetSourcesWithOrphanEntitlements
`func (o *GetActiveCampaignsV1200ResponseInner) UnsetSourcesWithOrphanEntitlements()`

UnsetSourcesWithOrphanEntitlements ensures that no value is present for SourcesWithOrphanEntitlements, not even an explicit nil
### GetMandatoryCommentRequirement

`func (o *GetActiveCampaignsV1200ResponseInner) GetMandatoryCommentRequirement() string`

GetMandatoryCommentRequirement returns the MandatoryCommentRequirement field if non-nil, zero value otherwise.

### GetMandatoryCommentRequirementOk

`func (o *GetActiveCampaignsV1200ResponseInner) GetMandatoryCommentRequirementOk() (*string, bool)`

GetMandatoryCommentRequirementOk returns a tuple with the MandatoryCommentRequirement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMandatoryCommentRequirement

`func (o *GetActiveCampaignsV1200ResponseInner) SetMandatoryCommentRequirement(v string)`

SetMandatoryCommentRequirement sets MandatoryCommentRequirement field to given value.

### HasMandatoryCommentRequirement

`func (o *GetActiveCampaignsV1200ResponseInner) HasMandatoryCommentRequirement() bool`

HasMandatoryCommentRequirement returns a boolean if a field has been set.


