import { connect } from 'react-redux';
import JobTile from '../../../components/JobTile/JobTile';
import './RecommendedJobs.scss';
import { jobAdvertisements } from '../../../data';

const RecommendedJobs = ({ jobOffers: { jobOffers, loading } }) => {
  return (
    <section className='recommended-jobs'>
      <h2 className='recommended-jobs__title'>Oferty wybrane dla Ciebie</h2>
      <div className='recommended-jobs__wrapper'>
        {!loading && jobOffers !== null && (
          <>
            <JobTile
              key={jobOffers[0].id}
              company={jobOffers[0].company.name}
              salaryFrom={jobAdvertisements[0].salaryFrom}
              salaryTo={jobAdvertisements[0].salaryTo}
              province={jobOffers[0].company.adress.province}
              city={jobOffers[0].company.adress.city}
              logo={jobAdvertisements[0].logo}
              jobTitle={jobOffers[1].jobTitle}
            />
            <JobTile
              key={jobOffers[1].id}
              company={jobOffers[1].company.name}
              salaryFrom={jobAdvertisements[1].salaryFrom}
              salaryTo={jobAdvertisements[1].salaryTo}
              province={jobOffers[1].company.adress.province}
              city={jobOffers[1].company.adress.city}
              logo={jobAdvertisements[1].logo}
              jobTitle={jobOffers[1].jobTitle}
            />
            <JobTile
              key={jobOffers[2].id}
              company={jobOffers[2].company.name}
              salaryFrom={jobAdvertisements[2].salaryFrom}
              salaryTo={jobAdvertisements[2].salaryTo}
              province={jobOffers[2].company.adress.province}
              city={jobOffers[2].company.adress.city}
              logo={jobAdvertisements[2].logo}
              jobTitle={jobOffers[2].jobTitle}
            />
            <JobTile
              key={jobOffers[3].id}
              company={jobOffers[3].company.name}
              salaryFrom={jobAdvertisements[3].salaryFrom}
              salaryTo={jobAdvertisements[3].salaryTo}
              province={jobOffers[3].company.adress.province}
              city={jobOffers[3].company.adress.city}
              logo={jobAdvertisements[3].logo}
              jobTitle={jobOffers[3].jobTitle}
            />
          </>
        )}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { jobOffers: state.jobOffer };
};

export default connect(mapStateToProps)(RecommendedJobs);
