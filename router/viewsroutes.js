const express = require('express')
const viewController = require('../controller/viewController')
const router = express.Router()

router.get("/",viewController.getIndex);
router.get("/forgetpassword",viewController.getForgetPassword);
router.get("/user", viewController.getUserDashboard);
router.get("/register", viewController.getSignupForm);
router.get("/checklist",viewController.getChecklist);


// For admin
router.get("/Sso_dashboard", viewController.getAdDashboard);
router.get("/viewchecklist", viewController.getViewChecklist);
router.get("/std_info", viewController.getStudentInfo);
router.get("/scan_deadlines", viewController.getSetDeadline);
router.get("/changepassword", viewController.getChangePassword );


// For super admin
router.get("/dashboard", viewController.getSADashboard);
router.get("/allstudents", viewController.getAllStudents);
router.get("/freshers", viewController.getFreshers);
router.get("/generate_sid", viewController.getGenerateSID);
router.get("/adminlist", viewController.getAdminlist);
router.get("/admission", viewController.getAdmission);
router.get("/category_table", viewController.getCategoryTable);
router.get("/changepassword", viewController.getChangePassword );




module.exports = router
