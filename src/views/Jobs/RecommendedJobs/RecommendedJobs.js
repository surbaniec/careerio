import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import JobTile from '../../../components/JobTile/JobTile';
import './RecommendedJobs.scss';

const RecommendedJobs = ({ jobOffers: { jobOffers, loading } }) => {
  return (
    <section className='recommended-jobs'>
      <h2 className='recommended-jobs__title'>Oferty wybrane dla Ciebie</h2>
      <div className='recommended-jobs__wrapper'>
        {!loading && jobOffers !== null && (
          <>
            <JobTile
              key={jobOffers[0].id}
              jobOfferId={jobOffers[0].id}
              company={jobOffers[0].company.name}
              salaryFrom={jobOffers[0].salaryFrom}
              salaryTo={jobOffers[0].salaryTo}
              province={jobOffers[0].company.adress.province}
              city={jobOffers[0].company.adress.city}
              logo={jobOffers[0].company.imageUrl}
              jobTitle={jobOffers[0].jobTitle}
            />
            <JobTile
              key={jobOffers[1].id}
              jobOfferId={jobOffers[1].id}
              company={jobOffers[1].company.name}
              salaryFrom={jobOffers[1].salaryFrom}
              salaryTo={jobOffers[1].salaryTo}
              province={jobOffers[1].company.adress.province}
              city={jobOffers[1].company.adress.city}
              logo={jobOffers[1].company.imageUrl}
              jobTitle={jobOffers[1].jobTitle}
            />
            <JobTile
              key={jobOffers[2].id}
              jobOfferId={jobOffers[2].id}
              company={jobOffers[2].company.name}
              salaryFrom={jobOffers[2].salaryFrom}
              salaryTo={jobOffers[2].salaryTo}
              province={jobOffers[2].company.adress.province}
              city={jobOffers[2].company.adress.city}
              logo={jobOffers[2].company.imageUrl}
              jobTitle={jobOffers[2].jobTitle}
            />
            <JobTile
              key={jobOffers[3].id}
              jobOfferId={jobOffers[3].id}
              company={jobOffers[3].company.name}
              salaryFrom={jobOffers[3].salaryFrom}
              salaryTo={jobOffers[3].salaryTo}
              province={jobOffers[3].company.adress.province}
              city={jobOffers[3].company.adress.city}
              logo={jobOffers[3].company.imageUrl}
              jobTitle={jobOffers[3].jobTitle}
            />
          </>
        )}
      </div>
    </section>
  );
};

RecommendedJobs.propTypes = {
  jobOffers: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return { jobOffers: state.jobOffer };
};

export default connect(mapStateToProps)(RecommendedJobs);
