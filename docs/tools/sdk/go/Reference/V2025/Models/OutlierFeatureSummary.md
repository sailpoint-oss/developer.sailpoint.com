---
id: outlier-feature-summary
title: OutlierFeatureSummary
pagination_label: OutlierFeatureSummary
sidebar_label: OutlierFeatureSummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'OutlierFeatureSummary', 'OutlierFeatureSummary'] 
slug: /tools/sdk/go//models/outlier-feature-summary
tags: ['SDK', 'Software Development Kit', 'OutlierFeatureSummary', 'OutlierFeatureSummary']
---

# OutlierFeatureSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContributingFeatureName** | Pointer to **string** | Contributing feature name | [optional] 
**IdentityOutlierDisplayName** | Pointer to **string** | Identity display name | [optional] 
**OutlierFeatureDisplayValues** | Pointer to [**[]OutlierFeatureSummaryOutlierFeatureDisplayValuesInner**](outlier-feature-summary-outlier-feature-display-values-inner) |  | [optional] 
**FeatureDefinition** | Pointer to **string** | Definition of the feature | [optional] 
**FeatureExplanation** | Pointer to **string** | Detailed explanation of the feature | [optional] 
**PeerDisplayName** | Pointer to **NullableString** | outlier's peer identity display name | [optional] 
**PeerIdentityId** | Pointer to **NullableString** | outlier's peer identity id | [optional] 
**AccessItemReference** | Pointer to **map[string]interface{}** | Access Item reference | [optional] 

## Methods

### NewOutlierFeatureSummary

`func NewOutlierFeatureSummary() *OutlierFeatureSummary`

NewOutlierFeatureSummary instantiates a new OutlierFeatureSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOutlierFeatureSummaryWithDefaults

`func NewOutlierFeatureSummaryWithDefaults() *OutlierFeatureSummary`

NewOutlierFeatureSummaryWithDefaults instantiates a new OutlierFeatureSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContributingFeatureName

`func (o *OutlierFeatureSummary) GetContributingFeatureName() string`

GetContributingFeatureName returns the ContributingFeatureName field if non-nil, zero value otherwise.

### GetContributingFeatureNameOk

`func (o *OutlierFeatureSummary) GetContributingFeatureNameOk() (*string, bool)`

GetContributingFeatureNameOk returns a tuple with the ContributingFeatureName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContributingFeatureName

`func (o *OutlierFeatureSummary) SetContributingFeatureName(v string)`

SetContributingFeatureName sets ContributingFeatureName field to given value.

### HasContributingFeatureName

`func (o *OutlierFeatureSummary) HasContributingFeatureName() bool`

HasContributingFeatureName returns a boolean if a field has been set.

### GetIdentityOutlierDisplayName

`func (o *OutlierFeatureSummary) GetIdentityOutlierDisplayName() string`

GetIdentityOutlierDisplayName returns the IdentityOutlierDisplayName field if non-nil, zero value otherwise.

### GetIdentityOutlierDisplayNameOk

`func (o *OutlierFeatureSummary) GetIdentityOutlierDisplayNameOk() (*string, bool)`

GetIdentityOutlierDisplayNameOk returns a tuple with the IdentityOutlierDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityOutlierDisplayName

`func (o *OutlierFeatureSummary) SetIdentityOutlierDisplayName(v string)`

SetIdentityOutlierDisplayName sets IdentityOutlierDisplayName field to given value.

### HasIdentityOutlierDisplayName

`func (o *OutlierFeatureSummary) HasIdentityOutlierDisplayName() bool`

HasIdentityOutlierDisplayName returns a boolean if a field has been set.

### GetOutlierFeatureDisplayValues

`func (o *OutlierFeatureSummary) GetOutlierFeatureDisplayValues() []OutlierFeatureSummaryOutlierFeatureDisplayValuesInner`

GetOutlierFeatureDisplayValues returns the OutlierFeatureDisplayValues field if non-nil, zero value otherwise.

### GetOutlierFeatureDisplayValuesOk

`func (o *OutlierFeatureSummary) GetOutlierFeatureDisplayValuesOk() (*[]OutlierFeatureSummaryOutlierFeatureDisplayValuesInner, bool)`

GetOutlierFeatureDisplayValuesOk returns a tuple with the OutlierFeatureDisplayValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutlierFeatureDisplayValues

`func (o *OutlierFeatureSummary) SetOutlierFeatureDisplayValues(v []OutlierFeatureSummaryOutlierFeatureDisplayValuesInner)`

SetOutlierFeatureDisplayValues sets OutlierFeatureDisplayValues field to given value.

### HasOutlierFeatureDisplayValues

`func (o *OutlierFeatureSummary) HasOutlierFeatureDisplayValues() bool`

HasOutlierFeatureDisplayValues returns a boolean if a field has been set.

### GetFeatureDefinition

`func (o *OutlierFeatureSummary) GetFeatureDefinition() string`

GetFeatureDefinition returns the FeatureDefinition field if non-nil, zero value otherwise.

### GetFeatureDefinitionOk

`func (o *OutlierFeatureSummary) GetFeatureDefinitionOk() (*string, bool)`

GetFeatureDefinitionOk returns a tuple with the FeatureDefinition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatureDefinition

`func (o *OutlierFeatureSummary) SetFeatureDefinition(v string)`

SetFeatureDefinition sets FeatureDefinition field to given value.

### HasFeatureDefinition

`func (o *OutlierFeatureSummary) HasFeatureDefinition() bool`

HasFeatureDefinition returns a boolean if a field has been set.

### GetFeatureExplanation

`func (o *OutlierFeatureSummary) GetFeatureExplanation() string`

GetFeatureExplanation returns the FeatureExplanation field if non-nil, zero value otherwise.

### GetFeatureExplanationOk

`func (o *OutlierFeatureSummary) GetFeatureExplanationOk() (*string, bool)`

GetFeatureExplanationOk returns a tuple with the FeatureExplanation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatureExplanation

`func (o *OutlierFeatureSummary) SetFeatureExplanation(v string)`

SetFeatureExplanation sets FeatureExplanation field to given value.

### HasFeatureExplanation

`func (o *OutlierFeatureSummary) HasFeatureExplanation() bool`

HasFeatureExplanation returns a boolean if a field has been set.

### GetPeerDisplayName

`func (o *OutlierFeatureSummary) GetPeerDisplayName() string`

GetPeerDisplayName returns the PeerDisplayName field if non-nil, zero value otherwise.

### GetPeerDisplayNameOk

`func (o *OutlierFeatureSummary) GetPeerDisplayNameOk() (*string, bool)`

GetPeerDisplayNameOk returns a tuple with the PeerDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeerDisplayName

`func (o *OutlierFeatureSummary) SetPeerDisplayName(v string)`

SetPeerDisplayName sets PeerDisplayName field to given value.

### HasPeerDisplayName

`func (o *OutlierFeatureSummary) HasPeerDisplayName() bool`

HasPeerDisplayName returns a boolean if a field has been set.

### SetPeerDisplayNameNil

`func (o *OutlierFeatureSummary) SetPeerDisplayNameNil(b bool)`

 SetPeerDisplayNameNil sets the value for PeerDisplayName to be an explicit nil

### UnsetPeerDisplayName
`func (o *OutlierFeatureSummary) UnsetPeerDisplayName()`

UnsetPeerDisplayName ensures that no value is present for PeerDisplayName, not even an explicit nil
### GetPeerIdentityId

`func (o *OutlierFeatureSummary) GetPeerIdentityId() string`

GetPeerIdentityId returns the PeerIdentityId field if non-nil, zero value otherwise.

### GetPeerIdentityIdOk

`func (o *OutlierFeatureSummary) GetPeerIdentityIdOk() (*string, bool)`

GetPeerIdentityIdOk returns a tuple with the PeerIdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeerIdentityId

`func (o *OutlierFeatureSummary) SetPeerIdentityId(v string)`

SetPeerIdentityId sets PeerIdentityId field to given value.

### HasPeerIdentityId

`func (o *OutlierFeatureSummary) HasPeerIdentityId() bool`

HasPeerIdentityId returns a boolean if a field has been set.

### SetPeerIdentityIdNil

`func (o *OutlierFeatureSummary) SetPeerIdentityIdNil(b bool)`

 SetPeerIdentityIdNil sets the value for PeerIdentityId to be an explicit nil

### UnsetPeerIdentityId
`func (o *OutlierFeatureSummary) UnsetPeerIdentityId()`

UnsetPeerIdentityId ensures that no value is present for PeerIdentityId, not even an explicit nil
### GetAccessItemReference

`func (o *OutlierFeatureSummary) GetAccessItemReference() map[string]interface{}`

GetAccessItemReference returns the AccessItemReference field if non-nil, zero value otherwise.

### GetAccessItemReferenceOk

`func (o *OutlierFeatureSummary) GetAccessItemReferenceOk() (*map[string]interface{}, bool)`

GetAccessItemReferenceOk returns a tuple with the AccessItemReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessItemReference

`func (o *OutlierFeatureSummary) SetAccessItemReference(v map[string]interface{})`

SetAccessItemReference sets AccessItemReference field to given value.

### HasAccessItemReference

`func (o *OutlierFeatureSummary) HasAccessItemReference() bool`

HasAccessItemReference returns a boolean if a field has been set.


