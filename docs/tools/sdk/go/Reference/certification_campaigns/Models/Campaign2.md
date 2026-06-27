---
id: v1-campaign2
title: Campaign2
pagination_label: Campaign2
sidebar_label: Campaign2
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Campaign2', 'V1Campaign2'] 
slug: /tools/sdk/go/certificationcampaigns/models/campaign2
tags: ['SDK', 'Software Development Kit', 'Campaign2', 'V1Campaign2']
---

# Campaign2

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

### NewCampaign2

`func NewCampaign2(name string, description NullableString, type_ string, ) *Campaign2`

NewCampaign2 instantiates a new Campaign2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaign2WithDefaults

`func NewCampaign2WithDefaults() *Campaign2`

NewCampaign2WithDefaults instantiates a new Campaign2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Campaign2) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Campaign2) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Campaign2) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Campaign2) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *Campaign2) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *Campaign2) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *Campaign2) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Campaign2) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Campaign2) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Campaign2) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Campaign2) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Campaign2) SetDescription(v string)`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *Campaign2) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Campaign2) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetDeadline

`func (o *Campaign2) GetDeadline() SailPointTime`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *Campaign2) GetDeadlineOk() (*SailPointTime, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *Campaign2) SetDeadline(v SailPointTime)`

SetDeadline sets Deadline field to given value.

### HasDeadline

`func (o *Campaign2) HasDeadline() bool`

HasDeadline returns a boolean if a field has been set.

### SetDeadlineNil

`func (o *Campaign2) SetDeadlineNil(b bool)`

 SetDeadlineNil sets the value for Deadline to be an explicit nil

### UnsetDeadline
`func (o *Campaign2) UnsetDeadline()`

UnsetDeadline ensures that no value is present for Deadline, not even an explicit nil
### GetType

`func (o *Campaign2) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Campaign2) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Campaign2) SetType(v string)`

SetType sets Type field to given value.


### GetEmailNotificationEnabled

`func (o *Campaign2) GetEmailNotificationEnabled() bool`

GetEmailNotificationEnabled returns the EmailNotificationEnabled field if non-nil, zero value otherwise.

### GetEmailNotificationEnabledOk

`func (o *Campaign2) GetEmailNotificationEnabledOk() (*bool, bool)`

GetEmailNotificationEnabledOk returns a tuple with the EmailNotificationEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailNotificationEnabled

`func (o *Campaign2) SetEmailNotificationEnabled(v bool)`

SetEmailNotificationEnabled sets EmailNotificationEnabled field to given value.

### HasEmailNotificationEnabled

`func (o *Campaign2) HasEmailNotificationEnabled() bool`

HasEmailNotificationEnabled returns a boolean if a field has been set.

### GetAutoRevokeAllowed

`func (o *Campaign2) GetAutoRevokeAllowed() bool`

GetAutoRevokeAllowed returns the AutoRevokeAllowed field if non-nil, zero value otherwise.

### GetAutoRevokeAllowedOk

`func (o *Campaign2) GetAutoRevokeAllowedOk() (*bool, bool)`

GetAutoRevokeAllowedOk returns a tuple with the AutoRevokeAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoRevokeAllowed

`func (o *Campaign2) SetAutoRevokeAllowed(v bool)`

SetAutoRevokeAllowed sets AutoRevokeAllowed field to given value.

### HasAutoRevokeAllowed

`func (o *Campaign2) HasAutoRevokeAllowed() bool`

HasAutoRevokeAllowed returns a boolean if a field has been set.

### GetRecommendationsEnabled

`func (o *Campaign2) GetRecommendationsEnabled() bool`

GetRecommendationsEnabled returns the RecommendationsEnabled field if non-nil, zero value otherwise.

### GetRecommendationsEnabledOk

`func (o *Campaign2) GetRecommendationsEnabledOk() (*bool, bool)`

GetRecommendationsEnabledOk returns a tuple with the RecommendationsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendationsEnabled

`func (o *Campaign2) SetRecommendationsEnabled(v bool)`

SetRecommendationsEnabled sets RecommendationsEnabled field to given value.

### HasRecommendationsEnabled

`func (o *Campaign2) HasRecommendationsEnabled() bool`

HasRecommendationsEnabled returns a boolean if a field has been set.

### GetStatus

`func (o *Campaign2) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Campaign2) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Campaign2) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Campaign2) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### SetStatusNil

`func (o *Campaign2) SetStatusNil(b bool)`

 SetStatusNil sets the value for Status to be an explicit nil

### UnsetStatus
`func (o *Campaign2) UnsetStatus()`

UnsetStatus ensures that no value is present for Status, not even an explicit nil
### GetCorrelatedStatus

`func (o *Campaign2) GetCorrelatedStatus() string`

GetCorrelatedStatus returns the CorrelatedStatus field if non-nil, zero value otherwise.

### GetCorrelatedStatusOk

`func (o *Campaign2) GetCorrelatedStatusOk() (*string, bool)`

GetCorrelatedStatusOk returns a tuple with the CorrelatedStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelatedStatus

`func (o *Campaign2) SetCorrelatedStatus(v string)`

SetCorrelatedStatus sets CorrelatedStatus field to given value.

### HasCorrelatedStatus

`func (o *Campaign2) HasCorrelatedStatus() bool`

HasCorrelatedStatus returns a boolean if a field has been set.

### GetCreated

`func (o *Campaign2) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Campaign2) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Campaign2) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Campaign2) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *Campaign2) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *Campaign2) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetTotalCertifications

`func (o *Campaign2) GetTotalCertifications() int32`

GetTotalCertifications returns the TotalCertifications field if non-nil, zero value otherwise.

### GetTotalCertificationsOk

`func (o *Campaign2) GetTotalCertificationsOk() (*int32, bool)`

GetTotalCertificationsOk returns a tuple with the TotalCertifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCertifications

`func (o *Campaign2) SetTotalCertifications(v int32)`

SetTotalCertifications sets TotalCertifications field to given value.

### HasTotalCertifications

`func (o *Campaign2) HasTotalCertifications() bool`

HasTotalCertifications returns a boolean if a field has been set.

### SetTotalCertificationsNil

`func (o *Campaign2) SetTotalCertificationsNil(b bool)`

 SetTotalCertificationsNil sets the value for TotalCertifications to be an explicit nil

### UnsetTotalCertifications
`func (o *Campaign2) UnsetTotalCertifications()`

UnsetTotalCertifications ensures that no value is present for TotalCertifications, not even an explicit nil
### GetCompletedCertifications

`func (o *Campaign2) GetCompletedCertifications() int32`

GetCompletedCertifications returns the CompletedCertifications field if non-nil, zero value otherwise.

### GetCompletedCertificationsOk

`func (o *Campaign2) GetCompletedCertificationsOk() (*int32, bool)`

GetCompletedCertificationsOk returns a tuple with the CompletedCertifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedCertifications

`func (o *Campaign2) SetCompletedCertifications(v int32)`

SetCompletedCertifications sets CompletedCertifications field to given value.

### HasCompletedCertifications

`func (o *Campaign2) HasCompletedCertifications() bool`

HasCompletedCertifications returns a boolean if a field has been set.

### SetCompletedCertificationsNil

`func (o *Campaign2) SetCompletedCertificationsNil(b bool)`

 SetCompletedCertificationsNil sets the value for CompletedCertifications to be an explicit nil

### UnsetCompletedCertifications
`func (o *Campaign2) UnsetCompletedCertifications()`

UnsetCompletedCertifications ensures that no value is present for CompletedCertifications, not even an explicit nil
### GetAlerts

`func (o *Campaign2) GetAlerts() []Campaignalert`

GetAlerts returns the Alerts field if non-nil, zero value otherwise.

### GetAlertsOk

`func (o *Campaign2) GetAlertsOk() (*[]Campaignalert, bool)`

GetAlertsOk returns a tuple with the Alerts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlerts

`func (o *Campaign2) SetAlerts(v []Campaignalert)`

SetAlerts sets Alerts field to given value.

### HasAlerts

`func (o *Campaign2) HasAlerts() bool`

HasAlerts returns a boolean if a field has been set.

### SetAlertsNil

`func (o *Campaign2) SetAlertsNil(b bool)`

 SetAlertsNil sets the value for Alerts to be an explicit nil

### UnsetAlerts
`func (o *Campaign2) UnsetAlerts()`

UnsetAlerts ensures that no value is present for Alerts, not even an explicit nil
### GetModified

`func (o *Campaign2) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Campaign2) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Campaign2) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Campaign2) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *Campaign2) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *Campaign2) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetFilter

`func (o *Campaign2) GetFilter() Campaign2AllOfFilter`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *Campaign2) GetFilterOk() (*Campaign2AllOfFilter, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *Campaign2) SetFilter(v Campaign2AllOfFilter)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *Campaign2) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### SetFilterNil

`func (o *Campaign2) SetFilterNil(b bool)`

 SetFilterNil sets the value for Filter to be an explicit nil

### UnsetFilter
`func (o *Campaign2) UnsetFilter()`

UnsetFilter ensures that no value is present for Filter, not even an explicit nil
### GetSunsetCommentsRequired

`func (o *Campaign2) GetSunsetCommentsRequired() bool`

GetSunsetCommentsRequired returns the SunsetCommentsRequired field if non-nil, zero value otherwise.

### GetSunsetCommentsRequiredOk

`func (o *Campaign2) GetSunsetCommentsRequiredOk() (*bool, bool)`

GetSunsetCommentsRequiredOk returns a tuple with the SunsetCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunsetCommentsRequired

`func (o *Campaign2) SetSunsetCommentsRequired(v bool)`

SetSunsetCommentsRequired sets SunsetCommentsRequired field to given value.

### HasSunsetCommentsRequired

`func (o *Campaign2) HasSunsetCommentsRequired() bool`

HasSunsetCommentsRequired returns a boolean if a field has been set.

### GetSourceOwnerCampaignInfo

`func (o *Campaign2) GetSourceOwnerCampaignInfo() Campaign2AllOfSourceOwnerCampaignInfo`

GetSourceOwnerCampaignInfo returns the SourceOwnerCampaignInfo field if non-nil, zero value otherwise.

### GetSourceOwnerCampaignInfoOk

`func (o *Campaign2) GetSourceOwnerCampaignInfoOk() (*Campaign2AllOfSourceOwnerCampaignInfo, bool)`

GetSourceOwnerCampaignInfoOk returns a tuple with the SourceOwnerCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceOwnerCampaignInfo

`func (o *Campaign2) SetSourceOwnerCampaignInfo(v Campaign2AllOfSourceOwnerCampaignInfo)`

SetSourceOwnerCampaignInfo sets SourceOwnerCampaignInfo field to given value.

### HasSourceOwnerCampaignInfo

`func (o *Campaign2) HasSourceOwnerCampaignInfo() bool`

HasSourceOwnerCampaignInfo returns a boolean if a field has been set.

### SetSourceOwnerCampaignInfoNil

`func (o *Campaign2) SetSourceOwnerCampaignInfoNil(b bool)`

 SetSourceOwnerCampaignInfoNil sets the value for SourceOwnerCampaignInfo to be an explicit nil

### UnsetSourceOwnerCampaignInfo
`func (o *Campaign2) UnsetSourceOwnerCampaignInfo()`

UnsetSourceOwnerCampaignInfo ensures that no value is present for SourceOwnerCampaignInfo, not even an explicit nil
### GetSearchCampaignInfo

`func (o *Campaign2) GetSearchCampaignInfo() Campaign2AllOfSearchCampaignInfo`

GetSearchCampaignInfo returns the SearchCampaignInfo field if non-nil, zero value otherwise.

### GetSearchCampaignInfoOk

`func (o *Campaign2) GetSearchCampaignInfoOk() (*Campaign2AllOfSearchCampaignInfo, bool)`

GetSearchCampaignInfoOk returns a tuple with the SearchCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchCampaignInfo

`func (o *Campaign2) SetSearchCampaignInfo(v Campaign2AllOfSearchCampaignInfo)`

SetSearchCampaignInfo sets SearchCampaignInfo field to given value.

### HasSearchCampaignInfo

`func (o *Campaign2) HasSearchCampaignInfo() bool`

HasSearchCampaignInfo returns a boolean if a field has been set.

### SetSearchCampaignInfoNil

`func (o *Campaign2) SetSearchCampaignInfoNil(b bool)`

 SetSearchCampaignInfoNil sets the value for SearchCampaignInfo to be an explicit nil

### UnsetSearchCampaignInfo
`func (o *Campaign2) UnsetSearchCampaignInfo()`

UnsetSearchCampaignInfo ensures that no value is present for SearchCampaignInfo, not even an explicit nil
### GetRoleCompositionCampaignInfo

`func (o *Campaign2) GetRoleCompositionCampaignInfo() Campaign2AllOfRoleCompositionCampaignInfo`

GetRoleCompositionCampaignInfo returns the RoleCompositionCampaignInfo field if non-nil, zero value otherwise.

### GetRoleCompositionCampaignInfoOk

`func (o *Campaign2) GetRoleCompositionCampaignInfoOk() (*Campaign2AllOfRoleCompositionCampaignInfo, bool)`

GetRoleCompositionCampaignInfoOk returns a tuple with the RoleCompositionCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleCompositionCampaignInfo

`func (o *Campaign2) SetRoleCompositionCampaignInfo(v Campaign2AllOfRoleCompositionCampaignInfo)`

SetRoleCompositionCampaignInfo sets RoleCompositionCampaignInfo field to given value.

### HasRoleCompositionCampaignInfo

`func (o *Campaign2) HasRoleCompositionCampaignInfo() bool`

HasRoleCompositionCampaignInfo returns a boolean if a field has been set.

### SetRoleCompositionCampaignInfoNil

`func (o *Campaign2) SetRoleCompositionCampaignInfoNil(b bool)`

 SetRoleCompositionCampaignInfoNil sets the value for RoleCompositionCampaignInfo to be an explicit nil

### UnsetRoleCompositionCampaignInfo
`func (o *Campaign2) UnsetRoleCompositionCampaignInfo()`

UnsetRoleCompositionCampaignInfo ensures that no value is present for RoleCompositionCampaignInfo, not even an explicit nil
### GetMachineAccountCampaignInfo

`func (o *Campaign2) GetMachineAccountCampaignInfo() Campaign2AllOfMachineAccountCampaignInfo`

GetMachineAccountCampaignInfo returns the MachineAccountCampaignInfo field if non-nil, zero value otherwise.

### GetMachineAccountCampaignInfoOk

`func (o *Campaign2) GetMachineAccountCampaignInfoOk() (*Campaign2AllOfMachineAccountCampaignInfo, bool)`

GetMachineAccountCampaignInfoOk returns a tuple with the MachineAccountCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineAccountCampaignInfo

`func (o *Campaign2) SetMachineAccountCampaignInfo(v Campaign2AllOfMachineAccountCampaignInfo)`

SetMachineAccountCampaignInfo sets MachineAccountCampaignInfo field to given value.

### HasMachineAccountCampaignInfo

`func (o *Campaign2) HasMachineAccountCampaignInfo() bool`

HasMachineAccountCampaignInfo returns a boolean if a field has been set.

### SetMachineAccountCampaignInfoNil

`func (o *Campaign2) SetMachineAccountCampaignInfoNil(b bool)`

 SetMachineAccountCampaignInfoNil sets the value for MachineAccountCampaignInfo to be an explicit nil

### UnsetMachineAccountCampaignInfo
`func (o *Campaign2) UnsetMachineAccountCampaignInfo()`

UnsetMachineAccountCampaignInfo ensures that no value is present for MachineAccountCampaignInfo, not even an explicit nil
### GetSourcesWithOrphanEntitlements

`func (o *Campaign2) GetSourcesWithOrphanEntitlements() []Campaign2AllOfSourcesWithOrphanEntitlements`

GetSourcesWithOrphanEntitlements returns the SourcesWithOrphanEntitlements field if non-nil, zero value otherwise.

### GetSourcesWithOrphanEntitlementsOk

`func (o *Campaign2) GetSourcesWithOrphanEntitlementsOk() (*[]Campaign2AllOfSourcesWithOrphanEntitlements, bool)`

GetSourcesWithOrphanEntitlementsOk returns a tuple with the SourcesWithOrphanEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourcesWithOrphanEntitlements

`func (o *Campaign2) SetSourcesWithOrphanEntitlements(v []Campaign2AllOfSourcesWithOrphanEntitlements)`

SetSourcesWithOrphanEntitlements sets SourcesWithOrphanEntitlements field to given value.

### HasSourcesWithOrphanEntitlements

`func (o *Campaign2) HasSourcesWithOrphanEntitlements() bool`

HasSourcesWithOrphanEntitlements returns a boolean if a field has been set.

### SetSourcesWithOrphanEntitlementsNil

`func (o *Campaign2) SetSourcesWithOrphanEntitlementsNil(b bool)`

 SetSourcesWithOrphanEntitlementsNil sets the value for SourcesWithOrphanEntitlements to be an explicit nil

### UnsetSourcesWithOrphanEntitlements
`func (o *Campaign2) UnsetSourcesWithOrphanEntitlements()`

UnsetSourcesWithOrphanEntitlements ensures that no value is present for SourcesWithOrphanEntitlements, not even an explicit nil
### GetMandatoryCommentRequirement

`func (o *Campaign2) GetMandatoryCommentRequirement() string`

GetMandatoryCommentRequirement returns the MandatoryCommentRequirement field if non-nil, zero value otherwise.

### GetMandatoryCommentRequirementOk

`func (o *Campaign2) GetMandatoryCommentRequirementOk() (*string, bool)`

GetMandatoryCommentRequirementOk returns a tuple with the MandatoryCommentRequirement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMandatoryCommentRequirement

`func (o *Campaign2) SetMandatoryCommentRequirement(v string)`

SetMandatoryCommentRequirement sets MandatoryCommentRequirement field to given value.

### HasMandatoryCommentRequirement

`func (o *Campaign2) HasMandatoryCommentRequirement() bool`

HasMandatoryCommentRequirement returns a boolean if a field has been set.


