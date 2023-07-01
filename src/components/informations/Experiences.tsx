const Experiences = (props: any) => {
  const { experienceList } = props;

  return (
    <div className="flex flex-col mb-11 pr-6">
      <div className="uppercase text-3xl font-bold">Work Experience</div>
      <div className="h-0.5 bg-black"></div>
      <div>
        {experienceList.map((item: any) => (
          <div key={item.key}></div>
        ))}
      </div>
    </div>
  );
};

Experiences.defaultProps = {
  experienceList: [
    {
      key: 1,
      role: 'Fullstack Developer',
      company: 'TMA Solution',
      startTime: '03-2022',
      endTime: null,
      projects: [
        {
          name: 'Private Market Platform',
          teamMembers: {
            developer: 5,
            tester: null,
            scrumMaster: 1,
            bussinessAnalysist: 1,
            projectManager: 1,
            ProductOwner: 1,
            designer: 1,
            devops: 1,
          },
          responsibilities: [
            'Build and implement UI features base on requirements and designs with mono repo structure.',
            'Implement user authentication feature with AWS Cognito.',
            'Create APIs with NodeJS using AWS Lambda.',
            'Send custom email message with AWS SQS',
            'Write unit tests for UI and API with Jest.',
            'Conduct sprint demos to showcase newly implemented features to the team.',
          ],
          technologies: [
            'ReactJS (with Formik, Bootstrap, aws-amplify)',
            'NodeJS',
            'AWS (Cognito, API Gateway, Lambda Function, S3 Bucket, SQS, DynamoDB, Cloud Watch)',
          ],
        },
      ],
    },
    {
      key: 2,
      role: 'Fullstack Developer',
      company: 'TMA Solution',
      startTime: '03-2022',
      endTime: null,
      projects: [
        {
          name: 'Private Market Platform',
          teamMembers: {
            developer: 5,
            tester: null,
            scrumMaster: 1,
            bussinessAnalysist: 1,
            projectManager: 1,
            ProductOwner: 1,
            designer: 1,
            devops: 1,
          },
          responsibilities: [
            'Build and implement UI features base on requirements and designs with mono repo structure.',
            'Implement user authentication feature with AWS Cognito.',
            'Create APIs with NodeJS using AWS Lambda.',
            'Send custom email message with AWS SQS',
            'Write unit tests for UI and API with Jest.',
            'Conduct sprint demos to showcase newly implemented features to the team.',
          ],
          technologies: [
            'ReactJS (with Formik, Bootstrap, aws-amplify)',
            'NodeJS',
            'AWS (Cognito, API Gateway, Lambda Function, S3 Bucket, SQS, DynamoDB, Cloud Watch)',
          ],
        },
      ],
    },
  ],
};

export default Experiences;
