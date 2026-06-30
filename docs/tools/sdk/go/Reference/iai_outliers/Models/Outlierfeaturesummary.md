---
id: v1-outlierfeaturesummary
title: Outlierfeaturesummary
pagination_label: Outlierfeaturesummary
sidebar_label: Outlierfeaturesummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Outlierfeaturesummary', 'V1Outlierfeaturesummary'] 
slug: /tools/sdk/go/iaioutliers/models/outlierfeaturesummary
tags: ['SDK', 'Software Development Kit', 'Outlierfeaturesummary', 'V1Outlierfeaturesummary']
---

# Outlierfeaturesummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContributingFeatureName** | Pointer to **string** | Contributing feature name | [optional] 
**IdentityOutlierDisplayName** | Pointer to **string** | Identity display name | [optional] 
**OutlierFeatureDisplayValues** | Pointer to [**[]OutlierfeaturesummaryOutlierFeatureDisplayValuesInner**](outlierfeaturesummary-outlier-feature-display-values-inner) |  | [optional] 
**FeatureDefinition** | Pointer to **string** | Definition of the feature | [optional] 
**FeatureExplanation** | Pointer to **string** | Detailed explanation of the feature | [optional] 
**PeerDisplayName** | Pointer to **NullableString** | outlier's peer identity display name | [optional] 
**PeerIdentityId** | Pointer to **NullableString** | outlier's peer identity id | [optional] 
**AccessItemReference** | Pointer to **map[string]interface{}** | Access Item reference | [optional] 

## Methods

### NewOutlierfeaturesummary

`func NewOutlierfeaturesummary() *Outlierfeaturesummary`

NewOutlierfeaturesummary instantiates a new Outlierfeaturesummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOutlierfeaturesummaryWithDefaults

`func NewOutlierfeaturesummaryWithDefaults() *Outlierfeaturesummary`

NewOutlierfeaturesummaryWithDefaults instantiates a new Outlierfeaturesummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContributingFeatureName

`func (o *Outlierfeaturesummary) GetContributingFeatureName() string`

GetContributingFeatureName returns the ContributingFeatureName field if non-nil, zero value otherwise.

### GetContributingFeatureNameOk

`func (o *Outlierfeaturesummary) GetContributingFeatureNameOk() (*string, bool)`

GetContributingFeatureNameOk returns a tuple with the ContributingFeatureName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContributingFeatureName

`func (o *Outlierfeaturesummary) SetContributingFeatureName(v string)`

SetContributingFeatureName sets ContributingFeatureName field to given value.

### HasContributingFeatureName

`func (o *Outlierfeaturesummary) HasContributingFeatureName() bool`

HasContributingFeatureName returns a boolean if a field has been set.

### GetIdentityOutlierDisplayName

`func (o *Outlierfeaturesummary) GetIdentityOutlierDisplayName() string`

GetIdentityOutlierDisplayName returns the IdentityOutlierDisplayName field if non-nil, zero value otherwise.

### GetIdentityOutlierDisplayNameOk

`func (o *Outlierfeaturesummary) GetIdentityOutlierDisplayNameOk() (*string, bool)`

GetIdentityOutlierDisplayNameOk returns a tuple with the IdentityOutlierDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityOutlierDisplayName

`func (o *Outlierfeaturesummary) SetIdentityOutlierDisplayName(v string)`

SetIdentityOutlierDisplayName sets IdentityOutlierDisplayName field to given value.

### HasIdentityOutlierDisplayName

`func (o *Outlierfeaturesummary) HasIdentityOutlierDisplayName() bool`

HasIdentityOutlierDisplayName returns a boolean if a field has been set.

### GetOutlierFeatureDisplayValues

`func (o *Outlierfeaturesummary) GetOutlierFeatureDisplayValues() []OutlierfeaturesummaryOutlierFeatureDisplayValuesInner`

GetOutlierFeatureDisplayValues returns the OutlierFeatureDisplayValues field if non-nil, zero value otherwise.

### GetOutlierFeatureDisplayValuesOk

`func (o *Outlierfeaturesummary) GetOutlierFeatureDisplayValuesOk() (*[]OutlierfeaturesummaryOutlierFeatureDisplayValuesInner, bool)`

GetOutlierFeatureDisplayValuesOk returns a tuple with the OutlierFeatureDisplayValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutlierFeatureDisplayValues

`func (o *Outlierfeaturesummary) SetOutlierFeatureDisplayValues(v []OutlierfeaturesummaryOutlierFeatureDisplayValuesInner)`

SetOutlierFeatureDisplayValues sets OutlierFeatureDisplayValues field to given value.

### HasOutlierFeatureDisplayValues

`func (o *Outlierfeaturesummary) HasOutlierFeatureDisplayValues() bool`

HasOutlierFeatureDisplayValues returns a boolean if a field has been set.

### GetFeatureDefinition

`func (o *Outlierfeaturesummary) GetFeatureDefinition() string`

GetFeatureDefinition returns the FeatureDefinition field if non-nil, zero value otherwise.

### GetFeatureDefinitionOk

`func (o *Outlierfeaturesummary) GetFeatureDefinitionOk() (*string, bool)`

GetFeatureDefinitionOk returns a tuple with the FeatureDefinition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatureDefinition

`func (o *Outlierfeaturesummary) SetFeatureDefinition(v string)`

SetFeatureDefinition sets FeatureDefinition field to given value.

### HasFeatureDefinition

`func (o *Outlierfeaturesummary) HasFeatureDefinition() bool`

HasFeatureDefinition returns a boolean if a field has been set.

### GetFeatureExplanation

`func (o *Outlierfeaturesummary) GetFeatureExplanation() string`

GetFeatureExplanation returns the FeatureExplanation field if non-nil, zero value otherwise.

### GetFeatureExplanationOk

`func (o *Outlierfeaturesummary) GetFeatureExplanationOk() (*string, bool)`

GetFeatureExplanationOk returns a tuple with the FeatureExplanation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatureExplanation

`func (o *Outlierfeaturesummary) SetFeatureExplanation(v string)`

SetFeatureExplanation sets FeatureExplanation field to given value.

### HasFeatureExplanation

`func (o *Outlierfeaturesummary) HasFeatureExplanation() bool`

HasFeatureExplanation returns a boolean if a field has been set.

### GetPeerDisplayName

`func (o *Outlierfeaturesummary) GetPeerDisplayName() string`

GetPeerDisplayName returns the PeerDisplayName field if non-nil, zero value otherwise.

### GetPeerDisplayNameOk

`func (o *Outlierfeaturesummary) GetPeerDisplayNameOk() (*string, bool)`

GetPeerDisplayNameOk returns a tuple with the PeerDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeerDisplayName

`func (o *Outlierfeaturesummary) SetPeerDisplayName(v string)`

SetPeerDisplayName sets PeerDisplayName field to given value.

### HasPeerDisplayName

`func (o *Outlierfeaturesummary) HasPeerDisplayName() bool`

HasPeerDisplayName returns a boolean if a field has been set.

### SetPeerDisplayNameNil

`func (o *Outlierfeaturesummary) SetPeerDisplayNameNil(b bool)`

 SetPeerDisplayNameNil sets the value for PeerDisplayName to be an explicit nil

### UnsetPeerDisplayName
`func (o *Outlierfeaturesummary) UnsetPeerDisplayName()`

UnsetPeerDisplayName ensures that no value is present for PeerDisplayName, not even an explicit nil
### GetPeerIdentityId

`func (o *Outlierfeaturesummary) GetPeerIdentityId() string`

GetPeerIdentityId returns the PeerIdentityId field if non-nil, zero value otherwise.

### GetPeerIdentityIdOk

`func (o *Outlierfeaturesummary) GetPeerIdentityIdOk() (*string, bool)`

GetPeerIdentityIdOk returns a tuple with the PeerIdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeerIdentityId

`func (o *Outlierfeaturesummary) SetPeerIdentityId(v string)`

SetPeerIdentityId sets PeerIdentityId field to given value.

### HasPeerIdentityId

`func (o *Outlierfeaturesummary) HasPeerIdentityId() bool`

HasPeerIdentityId returns a boolean if a field has been set.

### SetPeerIdentityIdNil

`func (o *Outlierfeaturesummary) SetPeerIdentityIdNil(b bool)`

 SetPeerIdentityIdNil sets the value for PeerIdentityId to be an explicit nil

### UnsetPeerIdentityId
`func (o *Outlierfeaturesummary) UnsetPeerIdentityId()`

UnsetPeerIdentityId ensures that no value is present for PeerIdentityId, not even an explicit nil
### GetAccessItemReference

`func (o *Outlierfeaturesummary) GetAccessItemReference() map[string]interface{}`

GetAccessItemReference returns the AccessItemReference field if non-nil, zero value otherwise.

### GetAccessItemReferenceOk

`func (o *Outlierfeaturesummary) GetAccessItemReferenceOk() (*map[string]interface{}, bool)`

GetAccessItemReferenceOk returns a tuple with the AccessItemReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessItemReference

`func (o *Outlierfeaturesummary) SetAccessItemReference(v map[string]interface{})`

SetAccessItemReference sets AccessItemReference field to given value.

### HasAccessItemReference

`func (o *Outlierfeaturesummary) HasAccessItemReference() bool`

HasAccessItemReference returns a boolean if a field has been set.


