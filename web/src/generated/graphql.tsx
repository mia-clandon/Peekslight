import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  posts: PaginatedPosts;
  post?: Maybe<Post>;
  meEmployer?: Maybe<Employer>;
  employers: PaginatedEmployers;
  employersList: Array<Employer>;
  employer?: Maybe<Employer>;
  services: PaginatedServices;
  servicesList: Array<Service>;
  service?: Maybe<Service>;
  bookingDateTimeList: Array<BookingDateTime>;
  bookingUserList: Array<BookingUser>;
  me?: Maybe<User>;
  reviewServiceList: Array<ReviewService>;
  reviewService?: Maybe<Array<ReviewService>>;
  reviewEmployersList: Array<ReviewEmployer>;
  reviewEmployer?: Maybe<Array<ReviewEmployer>>;
  parametersEmployer?: Maybe<Array<ParameterEmployers>>;
  parametersEmployerList: PaginatedParameterEmployers;
};


export type QueryPostsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};


export type QueryEmployersArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryEmployerArgs = {
  id: Scalars['Float'];
};


export type QueryServicesArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryServiceArgs = {
  id: Scalars['Float'];
};


export type QueryReviewServiceArgs = {
  idService: Scalars['Float'];
};


export type QueryReviewEmployerArgs = {
  idEmployer: Scalars['Float'];
};


export type QueryParametersEmployerArgs = {
  idEmployer: Scalars['Float'];
};


export type QueryParametersEmployerListArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};

export type PaginatedPosts = {
  __typename?: 'PaginatedPosts';
  posts: Array<Post>;
  hasMore: Scalars['Boolean'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Float'];
  title: Scalars['String'];
  text: Scalars['String'];
  points: Scalars['Float'];
  voteStatus?: Maybe<Scalars['Int']>;
  creatorId: Scalars['Float'];
  creator: User;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  textSnippet: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  username: Scalars['String'];
  email: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Employer = {
  __typename?: 'Employer';
  id: Scalars['Float'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  cardDescription: Scalars['String'];
  description: Scalars['String'];
  position: Scalars['String'];
  phone: Scalars['String'];
  password: Scalars['String'];
  avatar: Scalars['String'];
  email: Scalars['String'];
  city: Scalars['String'];
  averageTime: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  emailEmployer: Scalars['String'];
};

export type PaginatedEmployers = {
  __typename?: 'PaginatedEmployers';
  employers: Array<Employer>;
  hasMore: Scalars['Boolean'];
};

export type PaginatedServices = {
  __typename?: 'PaginatedServices';
  services: Array<Service>;
  hasMore: Scalars['Boolean'];
};

export type Service = {
  __typename?: 'Service';
  id: Scalars['Float'];
  title: Scalars['String'];
  category: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['String'];
  location: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type BookingDateTime = {
  __typename?: 'BookingDateTime';
  id: Scalars['Float'];
  idClient: Scalars['Float'];
  idEmployer: Scalars['Float'];
  date: Scalars['String'];
  time: Scalars['String'];
};

export type BookingUser = {
  __typename?: 'BookingUser';
  id: Scalars['Float'];
  idService: Scalars['String'];
  service: Scalars['String'];
  dateBegin: Scalars['String'];
  dateBefore: Scalars['String'];
  fio: Scalars['String'];
  contact: Scalars['String'];
};

export type ReviewService = {
  __typename?: 'ReviewService';
  id: Scalars['Float'];
  idService: Scalars['Float'];
  idClient: Scalars['Float'];
  score: Scalars['Float'];
  scoreCommunicate: Scalars['Float'];
  scoreClear: Scalars['Float'];
  scoreArrival: Scalars['Float'];
  scoreAccuracy: Scalars['Float'];
  scoreLocate: Scalars['Float'];
  scoreRatio: Scalars['Float'];
  title: Scalars['String'];
  description: Scalars['String'];
  service: Scalars['String'];
};

export type ReviewEmployer = {
  __typename?: 'ReviewEmployer';
  id: Scalars['Float'];
  idEmployer: Scalars['Float'];
  idClient: Scalars['Float'];
  score: Scalars['Float'];
  scoreCommunicate: Scalars['Float'];
  scoreClear: Scalars['Float'];
  scoreArrival: Scalars['Float'];
  scoreAccuracy: Scalars['Float'];
  scoreLocate: Scalars['Float'];
  scoreRatio: Scalars['Float'];
  title: Scalars['String'];
  description: Scalars['String'];
  service: Scalars['String'];
};

export type ParameterEmployers = {
  __typename?: 'ParameterEmployers';
  id: Scalars['Float'];
  idEmployer: Scalars['Float'];
  title: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PaginatedParameterEmployers = {
  __typename?: 'PaginatedParameterEmployers';
  parametersEmployer: Array<ParameterEmployers>;
  hasMore: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  vote: Scalars['Boolean'];
  createPost: Post;
  updatePost?: Maybe<Post>;
  deletePost: Scalars['Boolean'];
  changePassword: UserResponse;
  forgotPassword: Scalars['Boolean'];
  createEmployer: EmployerResponse;
  loginEmployer: EmployerResponse;
  updateEmployer?: Maybe<Employer>;
  deleteEmployer: Scalars['Boolean'];
  logoutEmployer: Scalars['Boolean'];
  searchService: ServiceResponse;
  createService: Service;
  updateService?: Maybe<Service>;
  deleteService: Scalars['Boolean'];
  createBookingDateTime: BookingDateTime;
  createBookingUser: BookingUser;
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  createReviewService: ReviewService;
  createReviewEmployer: ReviewEmployer;
  createParameterEmployer: ParameterEmployers;
  updateParameterEmployer?: Maybe<ParameterEmployers>;
  deleteParameterEmployer: Scalars['Boolean'];
};


export type MutationVoteArgs = {
  value: Scalars['Int'];
  postId: Scalars['Int'];
};


export type MutationCreatePostArgs = {
  input: PostInput;
};


export type MutationUpdatePostArgs = {
  text: Scalars['String'];
  title: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Int'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationCreateEmployerArgs = {
  options: EmployerInput;
};


export type MutationLoginEmployerArgs = {
  password: Scalars['String'];
  phoneOrEmail: Scalars['String'];
};


export type MutationUpdateEmployerArgs = {
  input?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationDeleteEmployerArgs = {
  id: Scalars['Int'];
};


export type MutationSearchServiceArgs = {
  requestQuery: Scalars['String'];
};


export type MutationCreateServiceArgs = {
  input: ServiceInput;
};


export type MutationUpdateServiceArgs = {
  input?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationDeleteServiceArgs = {
  id: Scalars['Int'];
};


export type MutationCreateBookingDateTimeArgs = {
  input: BookingDateTimeInput;
};


export type MutationCreateBookingUserArgs = {
  input: BookingUserInput;
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationCreateReviewServiceArgs = {
  input: ReviewServiceInput;
};


export type MutationCreateReviewEmployerArgs = {
  input: ReviewEmployerInput;
};


export type MutationCreateParameterEmployerArgs = {
  options: ParametersEmployerInput;
};


export type MutationUpdateParameterEmployerArgs = {
  input?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationDeleteParameterEmployerArgs = {
  id: Scalars['Float'];
};

export type PostInput = {
  title: Scalars['String'];
  text: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  admin?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type EmployerResponse = {
  __typename?: 'EmployerResponse';
  errors?: Maybe<Array<FieldError>>;
  employer?: Maybe<Employer>;
};

export type EmployerInput = {
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  cardDescription: Scalars['String'];
  description: Scalars['String'];
  position: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  password: Scalars['String'];
  avatar: Scalars['String'];
  averageTime: Scalars['String'];
  city: Scalars['String'];
};

export type ServiceResponse = {
  __typename?: 'ServiceResponse';
  errors?: Maybe<Array<FieldError>>;
  serviceSearch?: Maybe<Service>;
};

export type ServiceInput = {
  title: Scalars['String'];
  category: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['String'];
  location: Scalars['String'];
};

export type BookingDateTimeInput = {
  date: Scalars['String'];
  time: Scalars['String'];
};

export type BookingUserInput = {
  idService: Scalars['String'];
  service: Scalars['String'];
  dateBegin: Scalars['String'];
  dateBefore: Scalars['String'];
  fio: Scalars['String'];
  contact: Scalars['String'];
};

export type UsernamePasswordInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};

export type ReviewServiceInput = {
  score: Scalars['Float'];
  scoreCommunicate: Scalars['Float'];
  scoreClear: Scalars['Float'];
  scoreArrival: Scalars['Float'];
  scoreAccuracy: Scalars['Float'];
  scoreLocate: Scalars['Float'];
  scoreRatio: Scalars['Float'];
  title: Scalars['String'];
  description: Scalars['String'];
  service: Scalars['String'];
};

export type ReviewEmployerInput = {
  score: Scalars['Float'];
  scoreCommunicate: Scalars['Float'];
  scoreClear: Scalars['Float'];
  scoreArrival: Scalars['Float'];
  scoreAccuracy: Scalars['Float'];
  scoreLocate: Scalars['Float'];
  scoreRatio: Scalars['Float'];
  title: Scalars['String'];
  description: Scalars['String'];
  service: Scalars['String'];
};

export type ParametersEmployerInput = {
  idEmployer: Scalars['Float'];
  title: Scalars['String'];
  description: Scalars['String'];
};

export type EmployerSnippetFragment = (
  { __typename?: 'Employer' }
  & Pick<Employer, 'id' | 'firstname' | 'lastname' | 'cardDescription' | 'description' | 'position' | 'email' | 'phone' | 'password' | 'avatar' | 'city' | 'averageTime' | 'createdAt' | 'updatedAt'>
);

export type PostSnippetFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'points' | 'textSnippet' | 'voteStatus'>
  & { creator: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  ) }
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username'>
);

export type RegularEmployerFragment = (
  { __typename?: 'Employer' }
  & Pick<Employer, 'id' | 'firstname' | 'lastname' | 'cardDescription' | 'description' | 'position' | 'email' | 'phone' | 'password' | 'avatar' | 'city' | 'averageTime' | 'createdAt' | 'updatedAt'>
);

export type RegularEmployerResponseFragment = (
  { __typename?: 'EmployerResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, employer?: Maybe<(
    { __typename?: 'Employer' }
    & RegularEmployerFragment
  )> }
);

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type RegularUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, admin?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type ServiceSnippetFragment = (
  { __typename?: 'Service' }
  & Pick<Service, 'id' | 'title' | 'category' | 'description' | 'price' | 'location' | 'createdAt' | 'updatedAt'>
);

export type CreateBookingDateTimeMutationVariables = Exact<{
  input: BookingDateTimeInput;
}>;


export type CreateBookingDateTimeMutation = (
  { __typename?: 'Mutation' }
  & { createBookingDateTime: (
    { __typename?: 'BookingDateTime' }
    & Pick<BookingDateTime, 'date' | 'time'>
  ) }
);

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type CreateBookingUserMutationVariables = Exact<{
  input: BookingUserInput;
}>;


export type CreateBookingUserMutation = (
  { __typename?: 'Mutation' }
  & { createBookingUser: (
    { __typename?: 'BookingUser' }
    & Pick<BookingUser, 'id' | 'idService' | 'service' | 'dateBegin' | 'dateBefore' | 'fio' | 'contact'>
  ) }
);

export type CreateEmployerMutationVariables = Exact<{
  options: EmployerInput;
}>;


export type CreateEmployerMutation = (
  { __typename?: 'Mutation' }
  & { createEmployer: (
    { __typename?: 'EmployerResponse' }
    & RegularEmployerResponseFragment
  ) }
);

export type CreateParameterEmployerMutationVariables = Exact<{
  options: ParametersEmployerInput;
}>;


export type CreateParameterEmployerMutation = (
  { __typename?: 'Mutation' }
  & { createParameterEmployer: (
    { __typename?: 'ParameterEmployers' }
    & Pick<ParameterEmployers, 'idEmployer' | 'title' | 'description'>
  ) }
);

export type CreatePostMutationVariables = Exact<{
  input: PostInput;
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'text' | 'points' | 'creatorId'>
  ) }
);

export type CreateReviewServiceMutationVariables = Exact<{
  input: ReviewServiceInput;
}>;


export type CreateReviewServiceMutation = (
  { __typename?: 'Mutation' }
  & { createReviewService: (
    { __typename?: 'ReviewService' }
    & Pick<ReviewService, 'title' | 'description' | 'service'>
  ) }
);

export type CreateServiceMutationVariables = Exact<{
  input: ServiceInput;
}>;


export type CreateServiceMutation = (
  { __typename?: 'Mutation' }
  & { createService: (
    { __typename?: 'Service' }
    & Pick<Service, 'id' | 'title' | 'category' | 'description' | 'price' | 'location'>
  ) }
);

export type DeleteEmployerMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteEmployerMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteEmployer'>
);

export type DeletePostMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePostMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deletePost'>
);

export type DeleteServiceMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteServiceMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteService'>
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type LoginEmployerMutationVariables = Exact<{
  phoneOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginEmployerMutation = (
  { __typename?: 'Mutation' }
  & { loginEmployer: (
    { __typename?: 'EmployerResponse' }
    & RegularEmployerResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterUserMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterUserMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type UpdatePostMutationVariables = Exact<{
  id: Scalars['Int'];
  title: Scalars['String'];
  text: Scalars['String'];
}>;


export type UpdatePostMutation = (
  { __typename?: 'Mutation' }
  & { updatePost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'text' | 'textSnippet'>
  )> }
);

export type VoteMutationVariables = Exact<{
  value: Scalars['Int'];
  postId: Scalars['Int'];
}>;


export type VoteMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'vote'>
);

export type BookingDateTimeListQueryVariables = Exact<{ [key: string]: never; }>;


export type BookingDateTimeListQuery = (
  { __typename?: 'Query' }
  & { bookingDateTimeList: Array<(
    { __typename?: 'BookingDateTime' }
    & Pick<BookingDateTime, 'date' | 'time'>
  )> }
);

export type BookingUserListQueryVariables = Exact<{ [key: string]: never; }>;


export type BookingUserListQuery = (
  { __typename?: 'Query' }
  & { bookingUserList: Array<(
    { __typename?: 'BookingUser' }
    & Pick<BookingUser, 'id' | 'idService' | 'service' | 'dateBegin' | 'dateBefore' | 'fio' | 'contact'>
  )> }
);

export type EmployerQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type EmployerQuery = (
  { __typename?: 'Query' }
  & { employer?: Maybe<(
    { __typename?: 'Employer' }
    & Pick<Employer, 'id' | 'firstname' | 'lastname' | 'description' | 'position' | 'avatar' | 'createdAt' | 'updatedAt'>
  )> }
);

export type EmployersQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type EmployersQuery = (
  { __typename?: 'Query' }
  & { employers: (
    { __typename?: 'PaginatedEmployers' }
    & Pick<PaginatedEmployers, 'hasMore'>
    & { employers: Array<(
      { __typename?: 'Employer' }
      & EmployerSnippetFragment
    )> }
  ) }
);

export type EmployersListQueryVariables = Exact<{ [key: string]: never; }>;


export type EmployersListQuery = (
  { __typename?: 'Query' }
  & { employersList: Array<(
    { __typename?: 'Employer' }
    & EmployerSnippetFragment
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type MeEmployerQueryVariables = Exact<{ [key: string]: never; }>;


export type MeEmployerQuery = (
  { __typename?: 'Query' }
  & { meEmployer?: Maybe<(
    { __typename?: 'Employer' }
    & RegularEmployerFragment
  )> }
);

export type ParametersEmployerListQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type ParametersEmployerListQuery = (
  { __typename?: 'Query' }
  & { parametersEmployerList: (
    { __typename?: 'PaginatedParameterEmployers' }
    & Pick<PaginatedParameterEmployers, 'hasMore'>
    & { parametersEmployer: Array<(
      { __typename?: 'ParameterEmployers' }
      & Pick<ParameterEmployers, 'id' | 'idEmployer' | 'title' | 'description'>
    )> }
  ) }
);

export type ParametersEmployerQueryVariables = Exact<{
  idEmployer: Scalars['Float'];
}>;


export type ParametersEmployerQuery = (
  { __typename?: 'Query' }
  & { parametersEmployer?: Maybe<Array<(
    { __typename?: 'ParameterEmployers' }
    & Pick<ParameterEmployers, 'id' | 'idEmployer' | 'title' | 'description'>
  )>> }
);

export type PostQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type PostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'points' | 'text' | 'voteStatus'>
    & { creator: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ) }
  )> }
);

export type PostsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts: (
    { __typename?: 'PaginatedPosts' }
    & Pick<PaginatedPosts, 'hasMore'>
    & { posts: Array<(
      { __typename?: 'Post' }
      & PostSnippetFragment
    )> }
  ) }
);

export type ReviewServiceListQueryVariables = Exact<{ [key: string]: never; }>;


export type ReviewServiceListQuery = (
  { __typename?: 'Query' }
  & { reviewServiceList: Array<(
    { __typename?: 'ReviewService' }
    & Pick<ReviewService, 'title' | 'description' | 'service'>
  )> }
);

export type ServiceQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type ServiceQuery = (
  { __typename?: 'Query' }
  & { service?: Maybe<(
    { __typename?: 'Service' }
    & Pick<Service, 'id' | 'title' | 'description' | 'price'>
  )> }
);

export type ServicesQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type ServicesQuery = (
  { __typename?: 'Query' }
  & { services: (
    { __typename?: 'PaginatedServices' }
    & Pick<PaginatedServices, 'hasMore'>
    & { services: Array<(
      { __typename?: 'Service' }
      & ServiceSnippetFragment
    )> }
  ) }
);

export type ServicesListQueryVariables = Exact<{ [key: string]: never; }>;


export type ServicesListQuery = (
  { __typename?: 'Query' }
  & { servicesList: Array<(
    { __typename?: 'Service' }
    & ServiceSnippetFragment
  )> }
);

export const EmployerSnippetFragmentDoc = gql`
    fragment EmployerSnippet on Employer {
  id
  firstname
  lastname
  cardDescription
  description
  position
  email
  phone
  password
  avatar
  city
  averageTime
  createdAt
  updatedAt
}
    `;
export const PostSnippetFragmentDoc = gql`
    fragment PostSnippet on Post {
  id
  createdAt
  updatedAt
  title
  points
  textSnippet
  voteStatus
  creator {
    id
    username
  }
}
    `;
export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularEmployerFragmentDoc = gql`
    fragment RegularEmployer on Employer {
  id
  firstname
  lastname
  cardDescription
  description
  position
  email
  phone
  password
  avatar
  city
  averageTime
  createdAt
  updatedAt
}
    `;
export const RegularEmployerResponseFragmentDoc = gql`
    fragment RegularEmployerResponse on EmployerResponse {
  errors {
    ...RegularError
  }
  employer {
    ...RegularEmployer
  }
}
    ${RegularErrorFragmentDoc}
${RegularEmployerFragmentDoc}`;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  admin {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const ServiceSnippetFragmentDoc = gql`
    fragment ServiceSnippet on Service {
  id
  title
  category
  description
  price
  location
  createdAt
  updatedAt
}
    `;
export const CreateBookingDateTimeDocument = gql`
    mutation CreateBookingDateTime($input: BookingDateTimeInput!) {
  createBookingDateTime(input: $input) {
    date
    time
  }
}
    `;

export function useCreateBookingDateTimeMutation() {
  return Urql.useMutation<CreateBookingDateTimeMutation, CreateBookingDateTimeMutationVariables>(CreateBookingDateTimeDocument);
};
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const CreateBookingUserDocument = gql`
    mutation CreateBookingUser($input: BookingUserInput!) {
  createBookingUser(input: $input) {
    id
    idService
    service
    dateBegin
    dateBefore
    fio
    contact
  }
}
    `;

export function useCreateBookingUserMutation() {
  return Urql.useMutation<CreateBookingUserMutation, CreateBookingUserMutationVariables>(CreateBookingUserDocument);
};
export const CreateEmployerDocument = gql`
    mutation CreateEmployer($options: EmployerInput!) {
  createEmployer(options: $options) {
    ...RegularEmployerResponse
  }
}
    ${RegularEmployerResponseFragmentDoc}`;

export function useCreateEmployerMutation() {
  return Urql.useMutation<CreateEmployerMutation, CreateEmployerMutationVariables>(CreateEmployerDocument);
};
export const CreateParameterEmployerDocument = gql`
    mutation CreateParameterEmployer($options: ParametersEmployerInput!) {
  createParameterEmployer(options: $options) {
    idEmployer
    title
    description
  }
}
    `;

export function useCreateParameterEmployerMutation() {
  return Urql.useMutation<CreateParameterEmployerMutation, CreateParameterEmployerMutationVariables>(CreateParameterEmployerDocument);
};
export const CreatePostDocument = gql`
    mutation CreatePost($input: PostInput!) {
  createPost(input: $input) {
    id
    createdAt
    updatedAt
    title
    text
    points
    creatorId
  }
}
    `;

export function useCreatePostMutation() {
  return Urql.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument);
};
export const CreateReviewServiceDocument = gql`
    mutation CreateReviewService($input: ReviewServiceInput!) {
  createReviewService(input: $input) {
    title
    description
    service
  }
}
    `;

export function useCreateReviewServiceMutation() {
  return Urql.useMutation<CreateReviewServiceMutation, CreateReviewServiceMutationVariables>(CreateReviewServiceDocument);
};
export const CreateServiceDocument = gql`
    mutation CreateService($input: ServiceInput!) {
  createService(input: $input) {
    id
    title
    category
    description
    price
    location
  }
}
    `;

export function useCreateServiceMutation() {
  return Urql.useMutation<CreateServiceMutation, CreateServiceMutationVariables>(CreateServiceDocument);
};
export const DeleteEmployerDocument = gql`
    mutation DeleteEmployer($id: Int!) {
  deleteEmployer(id: $id)
}
    `;

export function useDeleteEmployerMutation() {
  return Urql.useMutation<DeleteEmployerMutation, DeleteEmployerMutationVariables>(DeleteEmployerDocument);
};
export const DeletePostDocument = gql`
    mutation DeletePost($id: Int!) {
  deletePost(id: $id)
}
    `;

export function useDeletePostMutation() {
  return Urql.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument);
};
export const DeleteServiceDocument = gql`
    mutation DeleteService($id: Int!) {
  deleteService(id: $id)
}
    `;

export function useDeleteServiceMutation() {
  return Urql.useMutation<DeleteServiceMutation, DeleteServiceMutationVariables>(DeleteServiceDocument);
};
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LoginEmployerDocument = gql`
    mutation LoginEmployer($phoneOrEmail: String!, $password: String!) {
  loginEmployer(phoneOrEmail: $phoneOrEmail, password: $password) {
    ...RegularEmployerResponse
  }
}
    ${RegularEmployerResponseFragmentDoc}`;

export function useLoginEmployerMutation() {
  return Urql.useMutation<LoginEmployerMutation, LoginEmployerMutationVariables>(LoginEmployerDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterUserDocument = gql`
    mutation RegisterUser($options: UsernamePasswordInput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useRegisterUserMutation() {
  return Urql.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument);
};
export const UpdatePostDocument = gql`
    mutation UpdatePost($id: Int!, $title: String!, $text: String!) {
  updatePost(id: $id, title: $title, text: $text) {
    id
    title
    text
    textSnippet
  }
}
    `;

export function useUpdatePostMutation() {
  return Urql.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument);
};
export const VoteDocument = gql`
    mutation Vote($value: Int!, $postId: Int!) {
  vote(value: $value, postId: $postId)
}
    `;

export function useVoteMutation() {
  return Urql.useMutation<VoteMutation, VoteMutationVariables>(VoteDocument);
};
export const BookingDateTimeListDocument = gql`
    query BookingDateTimeList {
  bookingDateTimeList {
    date
    time
  }
}
    `;

export function useBookingDateTimeListQuery(options: Omit<Urql.UseQueryArgs<BookingDateTimeListQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<BookingDateTimeListQuery>({ query: BookingDateTimeListDocument, ...options });
};
export const BookingUserListDocument = gql`
    query BookingUserList {
  bookingUserList {
    id
    idService
    service
    dateBegin
    dateBefore
    fio
    contact
  }
}
    `;

export function useBookingUserListQuery(options: Omit<Urql.UseQueryArgs<BookingUserListQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<BookingUserListQuery>({ query: BookingUserListDocument, ...options });
};
export const EmployerDocument = gql`
    query Employer($id: Float!) {
  employer(id: $id) {
    id
    firstname
    lastname
    description
    position
    avatar
    createdAt
    updatedAt
  }
}
    `;

export function useEmployerQuery(options: Omit<Urql.UseQueryArgs<EmployerQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<EmployerQuery>({ query: EmployerDocument, ...options });
};
export const EmployersDocument = gql`
    query Employers($limit: Int!, $cursor: String) {
  employers(limit: $limit, cursor: $cursor) {
    hasMore
    employers {
      ...EmployerSnippet
    }
  }
}
    ${EmployerSnippetFragmentDoc}`;

export function useEmployersQuery(options: Omit<Urql.UseQueryArgs<EmployersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<EmployersQuery>({ query: EmployersDocument, ...options });
};
export const EmployersListDocument = gql`
    query EmployersList {
  employersList {
    ...EmployerSnippet
  }
}
    ${EmployerSnippetFragmentDoc}`;

export function useEmployersListQuery(options: Omit<Urql.UseQueryArgs<EmployersListQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<EmployersListQuery>({ query: EmployersListDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const MeEmployerDocument = gql`
    query MeEmployer {
  meEmployer {
    ...RegularEmployer
  }
}
    ${RegularEmployerFragmentDoc}`;

export function useMeEmployerQuery(options: Omit<Urql.UseQueryArgs<MeEmployerQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeEmployerQuery>({ query: MeEmployerDocument, ...options });
};
export const ParametersEmployerListDocument = gql`
    query ParametersEmployerList($limit: Int!, $cursor: String) {
  parametersEmployerList(limit: $limit, cursor: $cursor) {
    hasMore
    parametersEmployer {
      id
      idEmployer
      title
      description
    }
  }
}
    `;

export function useParametersEmployerListQuery(options: Omit<Urql.UseQueryArgs<ParametersEmployerListQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ParametersEmployerListQuery>({ query: ParametersEmployerListDocument, ...options });
};
export const ParametersEmployerDocument = gql`
    query ParametersEmployer($idEmployer: Float!) {
  parametersEmployer(idEmployer: $idEmployer) {
    id
    idEmployer
    title
    description
  }
}
    `;

export function useParametersEmployerQuery(options: Omit<Urql.UseQueryArgs<ParametersEmployerQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ParametersEmployerQuery>({ query: ParametersEmployerDocument, ...options });
};
export const PostDocument = gql`
    query Post($id: Int!) {
  post(id: $id) {
    id
    createdAt
    updatedAt
    title
    points
    text
    voteStatus
    creator {
      id
      username
    }
  }
}
    `;

export function usePostQuery(options: Omit<Urql.UseQueryArgs<PostQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PostQuery>({ query: PostDocument, ...options });
};
export const PostsDocument = gql`
    query Posts($limit: Int!, $cursor: String) {
  posts(limit: $limit, cursor: $cursor) {
    hasMore
    posts {
      ...PostSnippet
    }
  }
}
    ${PostSnippetFragmentDoc}`;

export function usePostsQuery(options: Omit<Urql.UseQueryArgs<PostsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PostsQuery>({ query: PostsDocument, ...options });
};
export const ReviewServiceListDocument = gql`
    query ReviewServiceList {
  reviewServiceList {
    title
    description
    service
  }
}
    `;

export function useReviewServiceListQuery(options: Omit<Urql.UseQueryArgs<ReviewServiceListQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ReviewServiceListQuery>({ query: ReviewServiceListDocument, ...options });
};
export const ServiceDocument = gql`
    query Service($id: Float!) {
  service(id: $id) {
    id
    title
    description
    price
  }
}
    `;

export function useServiceQuery(options: Omit<Urql.UseQueryArgs<ServiceQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ServiceQuery>({ query: ServiceDocument, ...options });
};
export const ServicesDocument = gql`
    query Services($limit: Int!, $cursor: String) {
  services(limit: $limit, cursor: $cursor) {
    hasMore
    services {
      ...ServiceSnippet
    }
  }
}
    ${ServiceSnippetFragmentDoc}`;

export function useServicesQuery(options: Omit<Urql.UseQueryArgs<ServicesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ServicesQuery>({ query: ServicesDocument, ...options });
};
export const ServicesListDocument = gql`
    query ServicesList {
  servicesList {
    ...ServiceSnippet
  }
}
    ${ServiceSnippetFragmentDoc}`;

export function useServicesListQuery(options: Omit<Urql.UseQueryArgs<ServicesListQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ServicesListQuery>({ query: ServicesListDocument, ...options });
};