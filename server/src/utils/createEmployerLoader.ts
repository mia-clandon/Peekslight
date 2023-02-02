import DataLoader from "dataloader";
import {Employer} from "../entities/internal/employer/Employer";

// [1, 78, 8, 9]
// [{id: 1, username: 'tim'}, {}, {}, {}]
export const createEmployerLoader = () =>
  new DataLoader<number, Employer>(async (employerIds) => {
    const employers = await Employer.findByIds(employerIds as number[]);
    const employerIdToEmployer: Record<number, Employer> = {};
    employers.forEach((u) => {
      employerIdToEmployer[u.id] = u;
    });

    const sortedEmployers = employerIds.map((employerId) => employerIdToEmployer[employerId]);
    // console.log("userIds", userIds);
    // console.log("map", userIdToUser);
    // console.log("sortedUsers", sortedUsers);
    return sortedEmployers;
  });
