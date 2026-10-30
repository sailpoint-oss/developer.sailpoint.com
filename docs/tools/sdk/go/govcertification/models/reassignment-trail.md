# ReassignmentTrail

# ReassignmentTrail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PreviousReviewer** | Pointer to [**ReassignmentTrailReviewer**](reassignment-trail-reviewer) |  | [optional] 
**NewReviewer** | Pointer to [**ReassignmentTrailReviewer**](reassignment-trail-reviewer) |  | [optional] 
**ReassignmentType** | Pointer to **string** | The type of reassignment. | [optional] 

## Methods

### NewReassignmentTrail

`func NewReassignmentTrail() *ReassignmentTrail`

NewReassignmentTrail instantiates a new ReassignmentTrail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReassignmentTrailWithDefaults

`func NewReassignmentTrailWithDefaults() *ReassignmentTrail`

NewReassignmentTrailWithDefaults instantiates a new ReassignmentTrail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPreviousReviewer

`func (o *ReassignmentTrail) GetPreviousReviewer() ReassignmentTrailReviewer`

GetPreviousReviewer returns the PreviousReviewer field if non-nil, zero value otherwise.

### GetPreviousReviewerOk

`func (o *ReassignmentTrail) GetPreviousReviewerOk() (*ReassignmentTrailReviewer, bool)`

GetPreviousReviewerOk returns a tuple with the PreviousReviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousReviewer

`func (o *ReassignmentTrail) SetPreviousReviewer(v ReassignmentTrailReviewer)`

SetPreviousReviewer sets PreviousReviewer field to given value.

### HasPreviousReviewer

`func (o *ReassignmentTrail) HasPreviousReviewer() bool`

HasPreviousReviewer returns a boolean if a field has been set.

### GetNewReviewer

`func (o *ReassignmentTrail) GetNewReviewer() ReassignmentTrailReviewer`

GetNewReviewer returns the NewReviewer field if non-nil, zero value otherwise.

### GetNewReviewerOk

`func (o *ReassignmentTrail) GetNewReviewerOk() (*ReassignmentTrailReviewer, bool)`

GetNewReviewerOk returns a tuple with the NewReviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewReviewer

`func (o *ReassignmentTrail) SetNewReviewer(v ReassignmentTrailReviewer)`

SetNewReviewer sets NewReviewer field to given value.

### HasNewReviewer

`func (o *ReassignmentTrail) HasNewReviewer() bool`

HasNewReviewer returns a boolean if a field has been set.

### GetReassignmentType

`func (o *ReassignmentTrail) GetReassignmentType() string`

GetReassignmentType returns the ReassignmentType field if non-nil, zero value otherwise.

### GetReassignmentTypeOk

`func (o *ReassignmentTrail) GetReassignmentTypeOk() (*string, bool)`

GetReassignmentTypeOk returns a tuple with the ReassignmentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignmentType

`func (o *ReassignmentTrail) SetReassignmentType(v string)`

SetReassignmentType sets ReassignmentType field to given value.

### HasReassignmentType

`func (o *ReassignmentTrail) HasReassignmentType() bool`

HasReassignmentType returns a boolean if a field has been set.


